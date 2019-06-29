import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  NavLink
} from "react-router-dom";

class signInLow extends React.Component {
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
    fetch("http://localhost:5000/sign-in-low", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/displaycases");
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
      <center>
      <div>
      <div class="limiter">
      <div class="container-login100">
        <div class="login100-more1" />

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

          <div class="container-login100-form-btn">
      <div class="wrap-login100-form-btn">
        <div class="login100-form-bgbtn"></div>

         
            <br />
            <br />
           
            <button onClick={this.onclick.bind(this)}
            id="button1"
            >SIGN In</button>



            </div>
            <br />
            <br />
            <div class="wrap-login100-form-btn">
        <div class="login100-form-bgbtn"></div>
            <NavLink to="/lowerInf">
              <button
              id="button1"
              
              >SIGN UP</button>
            </NavLink>
            
            </div>
            <br />
            <br />
            
            {/* <a */}
            {/* // href="#" */}
            {/* class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30" */}
            {/* > */}
            {/* Sign in */}
            {/* <i class="fa fa-long-arrow-right m-l-5" /> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    
</div>
</center>
    );
  }
}

export default signInLow;
