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
  onclick = event => {
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
       
          

          <div class="limiter">
            <div class="container-login100">
              <div class="login100-more" />

              <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                {/* <form class="login100-form validate-form"> */}
                <span class="login100-form-title p-b-59">Sign In</span>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Name is required"
                >
                  <span class="label-input100">username</span>
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    placeholder="username..."
                    value={this.state.username}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <span class="label-input100">password</span>
                  <input
                    class="input100"
                    type="text"
                    name="password"
                    placeholder="*************..."
                    value={this.state.password}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <span class="focus-input100" />
                </div>
                <button onClick={this.onclick.bind(this)}  >sign In</button>
								<br />
          <br />
                <NavLink to="/signUpClient">
                  <button>signUpClient</button>
                </NavLink>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        
      </div>
    );
  }
}

export default signIn;
