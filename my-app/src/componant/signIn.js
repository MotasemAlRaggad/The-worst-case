import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  NavLink
} from "react-router-dom";



class signIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  // onclick
  onSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/lowaer");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <div>
        
          <form onSubmit={this.onSubmit}>
            <body>
              <center>
                <input
                  value={this.state.username}
                  label="username"
                  type="text"
                  placeholder="username"
                  onChange={this.handleInputChange.bind(this)}
                  name="username"
                />
                <br />

                <input
                  value={this.state.password}
                  label="password"
                  type="text"
                  placeholder="password"
                  onChange={this.handleInputChange.bind(this)}
                  name="password"
                />
                <br />
                <input type="submit" value="Submit" />
              </center>
            </body>

            <NavLink to="/signUpClient">
              <button>signUpClient</button>
            </NavLink>
          </form>
          <br />
          <br />
          <br />
          <img
            id="img"
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kuOEWwdbRppq3E6ZSKwqZIsZYvzXcFKaqU01Knug4Fg8JAxD"
          />



 <div  >
	
	<div className="limiter">
		<div class="container-login100">
			<div class="login100-more" style="background-image: url('images/bg-01.jpg');"></div>

			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-59" >
						Sign Up
					</span>

					<div class="wrap-input100 validate-input" data-validate="Name is required">
						<span class="label-input100">Full Name</span>
						<input class="input100" type="text" name="name" placeholder="Name..." />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span class="label-input100">Email</span>
						<input class="input100" type="text" name="email" placeholder="Email addess..." />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Username is required">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" placeholder="Username..." />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="text" name="pass" placeholder="*************" />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Repeat Password is required">
						<span class="label-input100">Repeat Password</span>
						<input class="input100" type="text" name="repeat-pass" placeholder="*************" />
						<span class="focus-input100"></span>
					</div>

				

						
					

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Sign Up
							</button>
						</div>

						<a href="#" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
							Sign in
							<i class="fa fa-long-arrow-right m-l-5"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

</div>

       
      </div>
      
    );
  }
}

export default signIn;
