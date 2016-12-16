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
				<div> 
				
				<nav id="mainNav" className="navbar navbar-default navbar-fixed-top" role="navigation">
					<div className="container">
						<div className="navbar-header page-scroll">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand page-scroll" href="#">Team Tow</a>
						</div>
						
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav">
								
								<li>
									<a className="page-scroll" href="/users/signup-signin">Sign In</a>
								</li>
								<li>
									<a className="page-scroll" href="/users/signup">New User</a>
								</li>
								<li>
									<a className="page-scroll" href="#contact">Contact</a>
								</li>
								<li>
									<a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a>
								</li>
								 <li>
									<a href="/users/sign-out"><span className="glyphicon glyphicon-log-in"></span> Sign Out</a>
								</li>
								<li>
									<a className="btn btn-success btn-sm truckbtn" href="/trucks/signup-signin">TOW TRUCK</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

					<div className="container">	       				        
				        <div className="container signup-div">
				          <div className="form-box signup-form">
				            <div className="form-top">
				              <div className="form-top-left">
				                <h3>Sign up now</h3>
				                <p>Fill in the form below to get instant access:</p>
				              </div>
				              <div className="form-top-right">
				                <i className="fa fa-pencil"></i>
				              </div>
				            </div>
				            <div className="form-bottom">
				              <form role="form" action="/users/sign-up" method="POST" className="registration-form">
				                <div className="form-group">
				                  <label className="sr-only" for="username">Username</label>
				                  <input type="text" name="username" placeholder="Username..." className="form-email form-control" id="form-username" />
				                </div>
				                <div className="form-group">
				                  <label className="sr-only" for="firstName">FirstName</label>
				                  <input type="text" name="firstName" placeholder="First Name..." className="form-email form-control" id="form-firstName" />
				                </div>
				                <div className="form-group">
				                  <label className="sr-only" for="lastName">lastName</label>
				                  <input type="text" name="lastName" placeholder="Last Name..." className="form-email form-control" id="form-lastName" />
				                </div>
				                <div className="form-group">
				                  <label className="sr-only" for="email">Email</label>
				                  <input type="text" name="email" placeholder="Email..." className="form-email form-control" id="form-email" />
				                </div>
				                <div className="form-group">
				                  <label className="sr-only" for="password">Password</label>
				                  <input type="password" name="password" placeholder="Password..." className="form-password form-control" id="form-password" />
				                </div>
				                <button type="submit" className="btn">Sign me up!</button>
				              </form>
				            </div>
				          </div>
					        <div className="social-login"> 
					          <h3>...or login with:</h3>
					          <div className="social-login-buttons">
					            <a className="btn btn-link-2" href="#">
					            <i className="fa fa-facebook"></i> Facebook
					            </a>
					            <a className="btn btn-link-2" href="#">
					            <i className="fa fa-twitter"></i> Twitter
					            </a>
					            <a className="btn btn-link-2" href="#">
					            <i className="fa fa-google-plus"></i> Google Plus
					            </a>
					          </div>
					        </div>
				          
				        </div>
			        </div>
				  

</div>
		);
	}
});

module.exports = Home;