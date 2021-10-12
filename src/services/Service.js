import { Api } from '../classes/Api';

export class Service {

	constructor() {
		this.api = new Api();
		this.use_dummy = process.env.VUE_APP_USE_DUMMY === 'true';
	}

}