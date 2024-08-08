import App from './App';
import { createSSRApp } from 'vue';
import pinia from './store';
const app = createSSRApp(App);


import ZPMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'
app.mixin(ZPMixin)


import ZPInterceptor from '@/uni_modules/z-paging/components/z-paging/js/z-paging-interceptor'
ZPInterceptor.handleQuery((pageNo:any, pageSize:any, from:any)=>{
	//这里可以对pageNo, pageSize, from进行一些处理后return，请注意需要return一个数组，数组中0、1、2的元素就代表@query中绑定方法获取到的参数，数组长度不一定为3，数组长度为多少，@query中的参数就有多少个
	return [pageNo, pageSize, from];
})


export function createApp() {
  app.use(pinia)
  return {
    app
  }
}
