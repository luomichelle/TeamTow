var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./Components/navbar.js');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
})


ReactDOM.render(
		<App />,
		document.getElementById('container')
)