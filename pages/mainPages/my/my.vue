<template>
	<view class="content">
		<uv-button type="primary" text="确定" @click="click"></uv-button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	const click = () => {
		uni.navigateTo({
			url: '/pages/userPages/userInfo/userInfo',
		});
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 80rpx;
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