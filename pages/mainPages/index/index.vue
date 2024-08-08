<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{userInfo.username}}</text>
		</view>
		<uv-button type="primary" text="确定" @click="click"></uv-button>
		<uv-skeletons :loading="loading" :skeleton="skeleton"></uv-skeletons>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useUserStore } from "@/store";
	const userStore = useUserStore();
	let { userInfo } = storeToRefs(userStore);

	const loading = ref(true);
	const skeleton = ref([{
		type: 'line',
		num: 3,
		gap: '20rpx',
		style: ['width: 200rpx;marginBottom: 50rpx;', 'height: 100rpx;', 'width: 500rpx;'],
		// style: 'width: 200rpx;marginBottom: 50rpx;'
		// style: {width: '200rpx',marginBottom: '50rpx'}
	}])
	const click = () => {
		//更新 用户信息
		loading.value = false;
		userStore.$patch(state => {
			state.userInfo.username = '342'
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-top: 80rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>