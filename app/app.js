var React 		= require('react');
var ReactDOM 	= require('react-dom');
var Navbar 		= require('./Components/navbar.js');
var Core 		= require('./Components/core.js');

// The only overall component that is getting rendered onto the page:
var App = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
				<Core />
			</div>
		);
	}
})


ReactDOM.render(
		<App />,
		document.getElementById('container')
)