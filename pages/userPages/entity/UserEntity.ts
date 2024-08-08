import { BaseEntity } from '@/core/entity/BaseEntity';
export class UserEntity extends BaseEntity {
  /**
   * 用户名
   */
  username?: string;
  /**
   * 真实姓名
   */
  relName?: string;
  /**
   * 证件类型
   */
  certType?: string;
  /**
   * 号码
   */
  phone?: string
  /**
   * 证件号码
   */
  certNumber?: string;
  /**
   * 密码[加密]
   */
  password?: string;
  /**
   * 是否管理员
   */
  root?: boolean;
  /**
   * 是否超级管理员
   */
  globalRoot?: boolean;
  /**
   * 是否领导
   */
  leader?: boolean;
}
