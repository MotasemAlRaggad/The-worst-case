import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
class singInClient extends React.Component {
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
    fetch("/reg-Shop", {
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

        {/* ////////////// templet html /////// */}

        {/* <header class="header_area" >
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container box_1620">
          <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active"><a class="nav-link" href="HomePage">Home</a></li> 
              <li class="nav-item"><a class="nav-link" href="signInClient">signInClient</a></li> 
              <li class="nav-item"><a class="nav-link" href="services.html">Services</a>
              <li class="nav-item submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">Pages</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                  <li class="nav-item" ><a class="nav-link" href="blog-details.html" >Blog Details</a></li>
                </ul>
							</li>
              <li class="nav-item" /><a class="nav-link" href="contact.html" >Contact</a></li>
            </ul>
          </div> 
        </div>
      </nav>
    </div>
  </header> */}
        {/* <input />
        <input />
        <NavLink to="lowaer">
          <button>
            singInClient
            </button>
        </NavLink>

        <NavLink to="signUpClient">
          <button>
            signUpClient
      </button>
        </NavLink> */}
      </div>
    );
  }
}

export default singInClient;
