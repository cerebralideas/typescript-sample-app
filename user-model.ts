import mathUtils = require('math-ts');
import stringUtils = require('string-ts');
import userUtils = require('user-ts');

export function buildUser() {
	// Get user object
	var user = userUtils.getUser();

	// Build additional user data
	var userMeta = {
		fullName: stringUtils.formatName(user.firstName, user.lastName, { order: 'last-first' }),
		age: mathUtils.calcAge(user.birthdate),
		isProgrammer: user.knowFor.indexOf('computer programming') !== -1
	};

	// Create final model
	return Object.assign({}, user, userMeta);
}
