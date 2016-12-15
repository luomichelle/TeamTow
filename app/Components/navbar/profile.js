var React 	= require('react');

// The component for the users' profiles:
// Put your HTML for the profile template inside the div.
// Fill in the div's className from the Handlebars/CSS version's tag names.
var Profile = React.createClass({
	componentWillMount: function() {
		var self = this;
	},
	render: function() {
		return (
			<div className="">
				<h2>{this.props.name}</h2>
			</div>
		);
	}
});

// In React demo #5, the final render goes here, with name="" to be filled in. But we are not rendering until App.js, so how do we do this here?

module.exports = Profile;