import {defineStore} from "pinia";
import {ref} from "vue";
export const useCommonStore= defineStore(
    'common',()=>{
       //用户信息
       const  networkStatus = ref({
        	isConnected: false, //是否有网络链接
        	networkType: 'none' //网络类型
        })
		
		
        return {
            networkStatus
        }
		
    },{
        persist:{
            storage:{
                getItem(key){
                    return uni.getStorageSync(key)
                },
                setItem(key,value){
                    uni.setStorageSync(key,value)
                }
            }
        }
    }
)