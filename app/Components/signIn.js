var React 	= require('react');

// The component for the signIn dropdown:
var signIn = React.createClass({
	componentWillMount: function() {
		var self = this;
	},
	render: function() {
		return (
			<div class="top-content">
				<div class="inner-bg">
					<div class="container">
						<div class="row">
							<div class="col-sm-5">
								<div class="form-box">
									
									<div class="form-top">
										
										<div class="form-top-left">
											<br>
												<h3>Login to our site</h3>
												<p>Enter username and password to log on:</p>
											</div>
											<div class="form-top-right">
											<i class="fa fa-lock"></i>
											</div>
										</div>
										
										<div class="form-bottom">
											<form role="form" action="/users/sign-in" method="POST" class="login-form">
												<div class="form-group">
													<label class="sr-only" for="email">email</label>
													<input type="text" name="email" placeholder="Email..." class="form-username form-control" id="form-username">
												</div>
												<div class="form-group">
													<label class="sr-only" for="password">Password</label>
													<input type="password" name="password" placeholder="Password..." class="form-password form-control" id="form-password">
												</div>
												<button type="submit" class="btn">Sign in!</button>
											</form>
										</div>
									</div>

									<div class="social-login">
										<h3>...or login with:</h3>
										<div class="social-login-buttons">
											<a class="btn btn-link-2" href="#">
											<i class="fa fa-facebook"></i> Facebook
											</a>
											<a class="btn btn-link-2" href="#">
											<i class="fa fa-twitter"></i> Twitter
											</a>
											<a class="btn btn-link-2" href="#">
											<i class="fa fa-google-plus"></i> Google Plus
											</a>
										</div>
									</div>
								
								</div>

								<div class="col-sm-1 middle-border"></div>
								<div class="col-sm-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = signIn;