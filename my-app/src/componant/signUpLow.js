import React from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
class singUplow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      id: "",
      phoneNumber: ""
    };
  }
  onclick() {
    var data = this.state;
    fetch("http://localhost:5000/reg-Low", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log("data hear");
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <body>
            <center>
              <input
                value={this.state.username}
                label="username"
                type="text"
                placeholder="username"
                onChange={this.handleChange.bind(this)}
                name="username"
              />
              <br />

              <input
                value={this.state.password}
                label="password"
                type="text"
                placeholder="password"
                onChange={this.handleChange.bind(this)}
                name="password"
              />

              <br />

              <input
                value={this.state.workkinghours}
                label="id"
                type="text"
                placeholder="id"
                name="id"
                onChange={this.handleChange.bind(this)}
              />

              <br />

              <input
                value={this.state.phoneNumbers}
                label="phoneNumber"
                type="text"
                placeholder="PhoneNumber"
                onChange={this.handleChange.bind(this)}
                name="phoneNumber"
              />

              <br />

              <button onClick={this.onclick.bind(this)}>sign Up</button>
            </center>
          </body>
        </form>
        <section class="hero-banner">
          <div class="hero-banner__content text-center">
            <h1>We Well Understand Your Intention</h1>
            <a class="button" href="#">
              Make an Appoinment
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default singUplow;
