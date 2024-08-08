import { FrameAuthenticateService } from '@/core/service/FrameAuthenticateService';
import { UserEntity } from '../entity/UserEntity';
import request from '@/service/request';

interface ChangePasswordParams {
    oldPassword: string;
    newPassword: string;
}

enum Api {
  userInfo = 'getCurrentUserInfo',
  changePassword ='changePassword',
}

class UserService extends FrameAuthenticateService<UserEntity> {
    private static instance: UserService;
    private constructor() {
        super('user');
    }

    // 获取用户信息
    public getUserInfo() {
        return request.get(`${this.urlPrefix}/${Api.userInfo}`);
    }

    // 更改密码
    public changePassword(params: ChangePasswordParams) {
        return request.post(`${this.urlPrefix}/${Api.changePassword}`, params);
    }

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}

export default UserService.getInstance();
