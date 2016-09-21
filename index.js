'use strict';

var userModel = require('./user-model');

var user = userModel.buildUser();

console.log('Full name: ' + user.fullName);
console.log('Title: ' + user.title);
console.log('Age: ' + user.age);
console.log('Is programmer: ' + user.isProgrammer);
