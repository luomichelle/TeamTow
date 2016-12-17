var React = require('react');
var axios = require('axios');

// var InputBox = require('./InputBox');
// var PartialWordDisplay = require('./PartialWordDisplay');
// var GuessedLetters = require('./GuessedLetters');
// var HangpersonDisplay = require('./HangpersonDisplay');

var Home = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		game: {
	// 			partialWord: [],
	// 			guessed: []
	// 		}
	// 	}
	// },
	componentWillMount: function() {
		var self = this;
	},
	render: function() {
		return (
				 
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/index">TeamTow</a>
                <a class="ace-icon glyphicon glyphicon-road"></a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a className="btn btn-success btn-md truckbtn" id="become-host" href="/trucks/signup-signin">Become a Tow Truck Provider</a>
                    </li>

                    <li>
                        <a className="page-scroll" href="/users/signup-signin">Sign In</a>
                    </li>
                    <li>
                        <a href="/users/sign-out"><span className="glyphicon glyphicon-log-in"></span> Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

		);
	}
});

module.exports = Home;