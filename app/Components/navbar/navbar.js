var React 			= require('react');
var axios 			= require('axios');
var SignIn 			= require('./signIn.js');
var CreateAccount	= require('./createAccount.js');
var Contact			= require('./contact.js');
var Profile			= require('./profile.js');

// Component for the entire Navbar:
var Navbar = React.createClass({
	componentWillMount: function() {
		var self = this;
	},
	dropdown: function() {
		return (
			<div>
				<SignIn />
			</div>
		);
	},
	popup: function() {
		return alert('popup function is working');
	},
	render: function() {
		return (
				 
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
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
								<a className="truckClass" href="/truck/signup-signin">TOW TRUCK</a>
							</li>
							<li>
								<a onClick={this.dropdown} className="page-scroll"><span className="glyphicon glyphicon-log-in"></span> Sign In</a>
							</li>
							<li>
								<a onClick={this.dropdown} className="page-scroll" href="/users/signup"><span className="glyphicons glyphicons-plus"></span> Create Account</a>
							</li>
							<li>
								<a onClick={this.popup} className="page-scroll" href="#contact"><span className="glyphicon glyphicon-envelope"></span> Contact</a>
							</li>
							<li>
								<a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a>
							</li>
							 <li>
								<a href="/users/sign-out"><span className="glyphicon glyphicon-log-out"></span> Sign Out</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Navbar;