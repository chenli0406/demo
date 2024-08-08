import {defineStore} from "pinia";
import {ref} from "vue";
import type {UserEntity} from "@/pages/userPages/entity/UserEntity";
import UserService  from "@/service/UserService";
export const useUserStore= defineStore(
    'user',()=>{
        //用户信息
        const userInfo =ref<UserEntity>();
        //保存用户信息
        const setUserInfo=(val:UserEntity)=>{
            userInfo.value=val
        }
 
        //清理用户信息
        const clearStorage=()=>{
            userInfo.value=undefined
        }
		
		
		 // 登录 action方法
		const getUser = async () => {
		        const res = await UserService.getUserInfo()
		        // 保存用户信息到本地存储
		        setUserInfo(res.result)
		}
		
        return {
            userInfo,
            setUserInfo,
            clearStorage,
			getUser
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