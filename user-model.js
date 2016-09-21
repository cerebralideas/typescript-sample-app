'use strict';

var mathUtils = require('math-ts');
var stringUtils = require('string-ts');
var userUtils = require('user-ts');

function buildUser() {
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
exports.buildUser = buildUser;
