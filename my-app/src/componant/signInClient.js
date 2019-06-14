import React from "react";

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class singInClient extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      toggle1: false,
      shopname: "",
      shoplocation: "",
      workkinghour: "",
      specialties: "",
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  click(event) {


    event.preventDefault();
    const data = this.state
    fetch('http://localhost:5000/singInClient', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(state => this.setState(state));

    console.log(this.state);

  }
  render() {
    const { classes } = this.props;
    return (
      <div className="form-style-7">

        <form >
          <body> <center>




            <input
              id="filled-search"
              label="shopname"

              type="text"
              placeholder="Shopname"
              // className={classes.textField}
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="shopname"
            />
            <br />
      
            <input
              id="filled-search"
              label="shoplocation"

              type="text"
              placeholder="Shoplocation"
              // className={classes.textField}
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="shoplocation"
            />

            <br />


            <input
               id="filled-search"
              label="workkinghour"
              // className={classes.textField}
              type="text"
              placeholder="Working-Hour"
              name="workkinghour"
              autoComplete="workkinghour"
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}

            />


            <br />


            <input
            id="filled-search"
              label="phoneNumber"
              // className={classes.textField}
              type="text"
              placeholder="PhoneNumber"
              // autoComplete="current-phoneNumber"
              // margin="normal"
              // variant="filled"
              onChange={this.handleChange}
              name="phoneNumber"

            />
          



            <br />


            <button   type="submit" onClick={(event) => this.click(event)} >sign Up</button>


          </center>
          </body>
        </form>
      
 
      
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

    )
  }

}

export default singInClient