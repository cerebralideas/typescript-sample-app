import React = require('react');
import ReactDOM = require('react-dom');

interface Props {
	firstName: string;
	lastName: string;
	title: string;
	birthdate: string;
	knowFor: [ string ];
	fullName: string;
	age: number;
	isProgrammer: boolean;
}

export function User(props: Props) {
	return (
		<dl>
			<dt>Name:</dt>
				<dd>{ props.fullName }</dd>
			<dt>Title:</dt>
				<dd>{ props.title }</dd>
			<dt>Age:</dt>
				<dd>{ props.age }</dd>
			<dt>Is Programmer:</dt>
				<dd>{ props.isProgrammer.toString() }</dd>
		</dl>
	);
}
