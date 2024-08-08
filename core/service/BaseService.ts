import request from "../../service/request";
import { BaseEntity } from "../entity/BaseEntity";
import { PageResult } from "../entity/PageResult";

export class BaseService<E extends BaseEntity> {
  protected urlPrefix: string;

  constructor(system: string, serviceName: string) {
    this.urlPrefix = `/${system}${serviceName ? "/" + serviceName : ""}`;
  }
 /* 
   通用的增删改查
  */
 
  /* 根据ID查询 */
  public getById(params: Record<string, any>): Promise<E> {
    return request.get(`${this.urlPrefix}/getById`,params);
  }

  /* 查询列表 */
  public list(params?: Record<string, any>): Promise<E[]> {
    return request.post(`${this.urlPrefix}/list`, params);
  }

  /* 查询分页 */
  public async page(params?: Record<string, any>): Promise<PageResult<E>> {
    return request.post(`${this.urlPrefix}/page`, params);
  }

  /* 创建 */
  public create(params: E): Promise<E> {
    return request.post(this.urlPrefix, params);
  }

  /* 保存 */
  public save(params: E): Promise<E> {
    return request.post(`${this.urlPrefix}/save`, params);
  }

  /* 更新 */
  public update(params: E): Promise<E> {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return request.put(`${this.urlPrefix}/update`, params);
  }

  /* 删除 */
  public delete(params: Record<string, any>): Promise<E> {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return request.delete(this.urlPrefix, params);
  }

  /* 通过ID删除 */
  public deleteById(params: Record<string, any>): Promise<E> {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return request.delete(`${this.urlPrefix}/deleteById`, params);
  }
}
