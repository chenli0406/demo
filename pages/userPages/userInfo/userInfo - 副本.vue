<template>
	<view>
		<common-list :loadingStatus="loadingStatus" :list="list" :dataLoaded="dataLoaded">
			<template v-slot:listItem="{data}">
				<listItem :itemData="data"></listItem>
			</template>
		</common-list>
	</view>
</template>

<script setup lang="ts">
	import { ref, onMounted} from 'vue';
	import {onShow, onLoad,onReachBottom } from '@dcloudio/uni-app'
	import listItem from './components/listItem.vue';
	import commonList from '@/components/commonList.vue';
	import UserService from '@/service/userService';
	const list = ref([]);
	const loadingStatus = ref('loadmore');
	const total = ref(-1);
	const current = ref(0);
	const dataLoaded = ref(false);
	const query = ref({
		current: 1,
		limit: 14,
		entity: { state: "PUBLISH", title: undefined },
	})
	onShow(()=>{
		getData();
	})
	onReachBottom(()=>{
		getData();
	})
	
    const getData = async ()=> {
	  try {
	    if (loadingStatus.value !==  'loadmore') return;
	    current.value++;
	    if (list.value.length ===  total.value) {
	      loadingStatus.value =  'nomore';
	      uni.hideNavigationBarLoading(); // 关闭加载动画
	      return;
	    }
	    loadingStatus.value =  'loading';
	    uni.showNavigationBarLoading();
	    query.value.current =  current.value;
	    const res = await UserService.page(query.value);
	    if (res.code === 200) {
	      total.value = res.total;
			  
		  list.value = list.value.concat(res.result);

	      if (list.value.length ===  total.value) {
	        loadingStatus.value =  'nomore';
	        uni.hideNavigationBarLoading(); // 关闭加载动画
	      } else {
	          loadingStatus.value =  'loadmore'; // 将loadingStatus重置
	      }
	    }
	  } catch (error) {
	    console.error(error);
	  } finally {
		uni.hideNavigationBarLoading(); // 关闭加载动画
	    dataLoaded.value = true;
	  }
	}
</script>

<style lang="scss">

</style>