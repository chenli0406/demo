<template>
  <view class="image-box" 
  :style="{ 'border-radius': radius + 'rpx', 'width': width + 'rpx','height': height + 'rpx'}">
     <u--image
     	:showLoading="true"
     	:src="src"
     	:radius="radius + 'rpx'"
     	:width="width + 'rpx'"
     	:height="height + 'rpx'"
		@click="click">
     	<template v-slot:loading>
     		<u-loading-icon></u-loading-icon>
     	</template>
     	<template v-slot:error>
     		<u--image
     			:src="nodeImg?nodeImg:placeholder"
     			:radius="radius + 'rpx'"
     			:width="width + 'rpx'"
     			:height="height + 'rpx'"></u--image>
     	</template>
     </u--image>
  </view>
</template>

<script>
export default {
  name: "customImage",
  props: {
    src: {
      type: String,
      default: "",
    },
    radius: {
      type: Number,
      default: 8,
    },
    width: {
      type: Number,
      default: 224,
    },
    height: {
      type: Number,
      default: 168,
    },
	nodeImg:{
		type: String,
		default: "",
	},
  },
  data() {
    return {
      placeholder: require('@/static/img/houseNoPicture.png'),
    };
  },
  methods:{
	  click(){
		  this.$emit('customImageClick')
	  }
  }
};
</script>

<style scoped>
.image-box{
   background-color: #eee;
   overflow: hidden;
}
</style>
