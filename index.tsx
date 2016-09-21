import React = require('react');
import ReactDOM = require('react-dom');

import userModel = require('./user-model');
import UserView = require('./user-view');

const User = UserView.User;

function App() {
	var user = userModel.buildUser();
	return <User { ...user } />;
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


