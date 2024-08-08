import {BaseEntity} from '../entity/BaseEntity';
import {BaseService} from '../service/BaseService';

export class CoreBaseService<E extends BaseEntity> extends BaseService<E> {
	constructor(service: string) {
		super('app-rent-server', service);
	}
}