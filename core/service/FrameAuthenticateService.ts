import {BaseEntity} from '../entity/BaseEntity';
import {BaseService} from '../service/BaseService';

export class FrameAuthenticateService<E extends BaseEntity> extends BaseService<E> {
	constructor(service: string) {
		super('frame-authenticate', service);
	}
}
