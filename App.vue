<script setup lang="ts">
	import { useUserStore,useCommonStore } from "@/store";
	import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
	const userStore = useUserStore();
	const commonStore = useCommonStore();
	let { getUser } = userStore;
	
	onLaunch(() => {
		getUser();
		
		// 获取网络状态
		uni.getNetworkType({
			success: res => {
				if (res.networkType === 'none') {
					commonStore.$patch(state => {
						state.networkStatus.isConnected = false;
						state.networkStatus.networkType = res.networkType;
					})
					return
				}
				commonStore.$patch(state => {
					state.networkStatus.isConnected = true;
					state.networkStatus.networkType = res.networkType;
				})
			}
		})
		
		// 监听网络状态
		uni.onNetworkStatusChange(res => {
			if (!res.isConnected) {
				uni.showModal({
					content: '网络请求超时，请稍后再试',
					showCancel: false,
					success: function () {}
				})
			}
			commonStore.$patch(state => {
				state.networkStatus.isConnected = res.isConnected;
				state.networkStatus.networkType = res.networkType;
			})
		})
	})
	onShow(() => {
		console.log('App Show!')
	})
	onHide(() => {
		console.log('App Hide!')
	})
	
</script>

<style lang="scss">
	@import '@/uni_modules/uv-ui-tools/index.scss';
	@import '@/static/style/common.scss';
	/*每个页面公共css */
	page{
		background: #f5f5f5;
	}
</style>