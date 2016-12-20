// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
// var Parent = require('./Components/Parent');
var Main = require('./Components/Main');
// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(

	<Main />,
	document.getElementById('app')
)