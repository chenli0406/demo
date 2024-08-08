<template>
  <view class="none_data" :class="{ 'fixed-center': fixedCenter }" :style="{ 'margin-top': fixedCenter ? '0rpx' : margin + 'rpx' }">
    <image :src="icon ? icon : iconPath" mode="" :style="[{ width: width + 'rpx' }, { height: height + 'rpx' }]"></image>
    <text class="none_data_word">{{ title }}</text>
	<view class="none_data_btn u-m-t-60" @click="refresh">
		<text>刷新</text>
	</view>
  </view>
</template>

<script>
export default {
  name: "noneData",
  props: {
    title: {
      type: String,
      default: "网络异常，请刷新重试",
    },
    icon: {
      type: String,
      default: "",
    },
    margin: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 350,
    },
    height: {
      type: Number,
      default: 248,
    },
    // 是否固定在页面中间
    fixedCenter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      iconPath: require("../../static/img/nonetwork.png"),
    };
  },
  methods:{
	 refresh() {
		 
	 }
  }
};
</script>

<style lang="scss" scoped>
.none_data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.none_data_icon {
  width: 200rpx;
  height: 200rpx;
}
.none_data_word {
  display: block;
  font-size: 28rpx;
  font-weight: 400;
  color: #999999;
  margin-top: 24rpx;
  font-family: PingFangSC-Regular, PingFang SC;
}
.fixed-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.none_data_btn{
	width: 184rpx;
	height: 72rpx;
	line-height: 72rpx;
	text-align: center;
	background: #258CF4;
	border-radius: 36rpx;
	font-size: 32rpx;
	font-weight: 400;
	color: #FFFFFF;

}
</style>
