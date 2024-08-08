<template>
	<view>
		<view v-if="networkStatus.isConnected" :style="{marginTop: isStatusBar? statusBar + topHeight + 'px':''}">
			<view v-if="isDataLoaded">
				<view class="u-m-t-2 u-p-b-20" v-if="list.length > 0">
					<view class="list-box" :style="{'background-color':backgroundColor}" v-for="(item,index) in list" :key="index">
						<slot name="listItem" :data="item"></slot>
					</view>
				<!-- 	<text class="loading-text">
						{{ loadingText }}
					</text> -->
					<uv-load-more :status="loadingStatus" :loading-text="loadingText" :loadmore-text="loadingText" :nomore-text="loadingText" />
				</view>
			<!-- 	<noneData 
				 v-else 
				:fixedCenter="fixedCenter" 
				:icon="isSearch?iconPath:''" 
				:title="isSearch?'暂无搜索结果':'暂无数据'">
				</noneData> -->
			</view>
		</view>
		<view v-else>
			<noNetwork></noNetwork>
		</view>
		<view :style="{marginTop: margin +'rpx'}">
			<u-loading-icon :show="!isDataLoaded" :vertical='true' text="加载中" textSize="14"></u-loading-icon>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps} from 'vue';
import {useCommonStore } from "@/store";
import { storeToRefs } from 'pinia';
import noneData from '@/components/noneData/noneData.vue';
import noNetwork from '@/components/noNetwork/noNetwork.vue';



const commonStore = useCommonStore();
let { networkStatus }  =storeToRefs(commonStore);
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  loadingStatus: {
    type: String,
    default: 'loadmore',
  },
  dataLoaded: {
    type: Boolean,
    default: false,
  },
  isSearch: {  // 是否是搜索页面
    type: Boolean,
    default: false,
  },
  isStatusBar: { // 是否自定义nav
    type: Boolean,
    default: false,
  },
  topHeight: {
    type: Number,
    default: 44,  // px
  },
  margin: {
    type: Number,
    default: 40, 
  },
  fixedCenter: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    default: "#fff",
  }
});

// 定义组件内部的状态
const isDataLoaded = ref(false);
const statusBar = ref(props.isStatusBar);
const iconPath = '';
const contentText = {
  contentdown: "上拉11显示更多",
  contentrefresh: "正在加载...",
  contentnomore: "没有更多数据了",
};

// 计算属性
const loadingText = computed(() => {
  if (props.loadingStatus === 'loadmore') {
    return contentText.contentdown;
  } else if (props.loadingStatus === 'loading') {
	
    return contentText.contentrefresh;
  } else {
    return contentText.contentnomore;
  }
});

// 监听属性变化
watch(() => props.dataLoaded, (newVal) => {
  isDataLoaded.value = newVal;
});

</script>

<style scoped lang="scss">
</style>