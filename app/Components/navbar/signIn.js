var React 	= require('react');

// The component for the SignIn dropdown:
var SignIn = React.createClass({
	componentWillMount: function() {
		var self = this;
	},
	render: function() {
		return (
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

module.exports = SignIn;