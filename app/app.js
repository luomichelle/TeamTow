var React 		= require('react');
var ReactDOM 	= require('react-dom');
var Navbar 		= require('./Components/navbar/navbar.js');
var Core 		= require('./Components/core/core.js');
var Footer		= require('./Components/footer/footer.js');

// The only overall component that is getting rendered onto the page:
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