export class UserHelper {

	is_superadmin(user) {
		if( user == null ) {
			return false;
		}
		return user.is_superadmin;
	}

	isAdminOfAnyOrganization(user) {
		if( user == null ) {
			return false;
		}
		let is_admin = false;
		if( user.organization !== undefined && user.organization !== null ) {
			for (var i = 0; i < user.organization.length; i++) {
				if( user.organization[i].role.toUpperCase() == 'ADMIN' ) {
					is_admin = true;
					break;
				}
			}
		}
		return is_admin;
	}

	isAdminOfOrganization(user, organization_id) {
		let is_admin = false;

		if( user.organization !== undefined && user.organization !== null ) {
			let organization = user.organization.find(organization => organization._id === organization_id);

			if( organization !== null && organization !== undefined && organization.role.toUpperCase() == 'ADMIN' ) {
				is_admin = true;
			}
		}

		return is_admin;
	}

	hasOrganization(user, organization_id) {
		let has_organization = false;

		if( user.organization !== undefined && user.organization !== null ) {
			let organization = user.organization.find(organization => organization._id === organization_id);

			if( organization !== null && organization !== undefined ) {
				has_organization = true;
			}
		}

		return has_organization;
	}




}