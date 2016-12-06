var React = require('react');
var axios = require('axios');

// var InputBox = require('./InputBox');
// var PartialWordDisplay = require('./PartialWordDisplay');
// var GuessedLetters = require('./GuessedLetters');
// var HangpersonDisplay = require('./HangpersonDisplay');

var Home = React.createClass({
	getInitialState: function() {
		return {
			game: {
				partialWord: [],
				guessed: []
			}
		}
	},
	componentWillMount: function() {
		var self = this;
		// axios.get('/hangperson/current')
		// 	.then(function(result) {
		// 		self.setState({
		// 			game: result.data
		// 		});
		// 	});
	},
	render: function() {
		return (
				<div className="container-fluid">
				    <div className="embed-responsive embed-responsive-16by9">
				        <div id="background">
					         <div id="login_header">
											<p>
													<a href="/users/signup-signin">Sign In or Sign Up</a>

													<div>
														<p>Welcome! </p>
														<p>You are user.</p>
														<a href="/characters"><button id="choose_character">Choose your Character!</button></a>
													</div>
											</p>
										</div>
								</div>
				    </div>          
				</div>
		);
	}
});

module.exports = Home;