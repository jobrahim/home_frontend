import { Service } from './Service';

import dummy_users from '../dummy_responses/endpoint-index-users.js';
import dummy_user from '../dummy_responses/endpoint-show-users.js';
import dummy_users_of_operation from '../dummy_responses/endpoint-users-of-operation.js';

export class UserServices extends Service {

	profile() {
		return new Promise((resolve, reject) => {
			if( this.use_dummy ) {
				setTimeout(function() {
					resolve({
						name: 'Gonzalo',
						lastname: 'Castro',
						email: 'gonzalo@strategist.co',
						avatar: null, //'https://picsum.photos/200/200',
						access_type: 'FULL',
						role: 'ADMIN',
						organization: {
							name: 'Strategist Co',
							contact_name: 'Nicolas Arias Binda',
							contact_phone: '11 1234 1234',
							contact_mail: 'nicolas@strategist.co',
							avatar: null, //'https://picsum.photos/200/200'
						},
					});
				}, 1000);
			} else {
				this.api.submit('get', '/profile', [], false, true, false)
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}
		});
	}

	index() {
		return new Promise((resolve, reject) => {
			if( this.use_dummy ) {
				setTimeout(function() {
					resolve(dummy_users);
				}, 1000);
			} else {
				this.api.submit('get', '/users')
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}
		});
	}

	show(organization_id, user_id) {
		return new Promise((resolve, reject) => {
			if( this.use_dummy ) {
				setTimeout(function() {
					resolve(dummy_user);
				}, 1000);
			} else {
				this.api.submit('get', '/organizations/' + organization_id + '/users/' + user_id)
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}
		});
	}

	indexOfOperation(operation_id) {
		return new Promise((resolve, reject) => {
			if( this.use_dummy ) {
				setTimeout(function() {
					resolve(dummy_users_of_operation);
				}, 1000);
			} else {
				this.api.submit('get', '/operations/' + operation_id + '/users' )
					.then(response => resolve(response.data))
					.catch(error => reject(error));
			}
		});
	}

	indexOfOperations(operations) {
		return new Promise((resolve, reject) => {
			let url = '/operations/users';
			for (var i = 0; i < operations.length; i++) {
				if( i == 0 ) {
					url += '?';
				} else {
					url += '&';
				}
				url += 'operation_ids[]=' + operations[i]._id
			}
			this.api.submit('get', url )
				.then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	}

	share(form) {
		return new Promise((resolve, reject) => {
			form.post('/operations/follow')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	actionsOverOperations(form) {
		return new Promise((resolve, reject) => {
			form.post('/operations/followers')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	acceptUserInOperation(operation_id, user_id) {
		return new Promise((resolve, reject) => {
			this.api.submit('put', '/operations/' + operation_id + '/users/' + user_id, {
				accepted: true
			}).then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	}

	removeFromOperation(operation_id, user_id) {
		return new Promise((resolve, reject) => {
			this.api.submit('delete', '/operations/' + operation_id + '/users/' + user_id )
				.then(response => resolve(response.data))
				.catch(error => reject(error));
		});
	}

	invite(form) {
		return new Promise((resolve, reject) => {
			form.post('/users')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	removeFromOrganization(organization_id, user_id) {
		return new Promise((resolve, reject) => {
			this.api.submit('delete', '/organizations/' + organization_id + '/users/' + user_id)
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	updateAccessType(form, organization_id, user_id) {
		return new Promise((resolve, reject) => {
			form.post('/organizations/'+ organization_id +'/users/'+ user_id +'/access-type')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	updateDashboard(form) {
		return new Promise((resolve, reject) => {
			form.put('/config/dashboard')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}

	updatePassword(form) {
		return new Promise((resolve, reject) => {
			form.baseUrl = 'auth';
			form.put('/signin')
				.then(response => resolve(response) )
				.catch(error => reject(error));
		});
	}
}