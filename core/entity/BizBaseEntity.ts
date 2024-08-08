import { BaseEntity } from './BaseEntity';

export class BizBaseEntity extends BaseEntity {
    public businessCode?: string;
    public instanceId?: string;
    public orgId?: string;
    public completeTime?: Date;
    public data?: object;
    public methodName?: string;
    public completeParam?: string;
    public signFileId?: string;
    public extendedParam?: string;
    public market?: boolean;
    public parentId?: string;
    public projectId?: string;
    public transferUserList?: any
    public understand?: string
    public summary?: string
    public suggest?: string
    public employeeId?: string
    public confirmDate?: string
    public serverMethodName?: string
    public fileIds?: string
}
