import {BaseEntity} from './BaseEntity';

export class PageResult<E extends BaseEntity> {
	public page?: number;
	public total?: number;
	public result?: E[];
	public code?: number;
}
