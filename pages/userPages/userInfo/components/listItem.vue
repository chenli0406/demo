<template>
    <view class="listItem u-p-10 u-m-24">
          	
    </view>

</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	onMounted(() => {
	})
	const props = defineProps({
		itemData: {
			type: Object,
			default: () => {},
		},
	})
</script>

<style lang="scss" scoped>
.listItem{
	border-radius: 10rpx;
	background-color: #fff;
	height: 200rpx;
	border: 1rpx solid #eee;
}
</style>