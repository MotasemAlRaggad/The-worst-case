import React from "react";
import { storage } from "../firebase";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
class lowerInf extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: "",
        phoneNumber: "",
        location: "",
        graduateYear: "",
        graduatUN: "",
        image: null,
        url: ""
      }
    ];
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }

  handleUpload() {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      `state_changed`,
      snapshot => {},
      error => {},
      () => {
        storage
          .ref(`images`)
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            // console.log(url);
          });
      }
    );
  }
  changed(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onclick() {
    var data = this.state;
    console.log(data);
    fetch("http://localhost:5000/lowInf", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log("data hear");
    });
  }

  handleChange1(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
     <center>
     <div>
       <center>
<div>
  
    <div class="limiter">
      <div class="container-login100">
        <div class="login100-more" />

        <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
          {/* <form class="login100-form validate-form"> */}
          <span class="login100-form-title p-b-59">Sign Up</span>
          <div
            class="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <span class="label-input100">name</span>
            <input
              class="input100"
              type="text"
              name="name"
              placeholder="name..."
              value={this.state.name}
              onChange={this.handleChange1.bind(this)}
            />
            <span class="focus-input100" />
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span class="label-input100">phoneNumber</span>
            <input
              class="input100"
              type="text"
              name="phoneNumber"
              placeholder="phoneNumber..."
              value={this.state.phoneNumber}
              onChange={this.handleChange1.bind(this)}
            />
            <span class="focus-input100" />
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Username is required"
          >
            <span class="label-input100">location</span>
            <input
              class="input100"
              type="text"
              name="location"
              placeholder="location..."
              value={this.state.location}
              onChange={this.handleChange1.bind(this)}
            />
            <span class="focus-input100" />
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <span class="label-input100">graduateYear</span>
            <input
              class="input100"
              type="text"
              name="graduateYear"
              placeholder="graduateYear"
              value={this.state.graduateYear}
              onChange={this.handleChange1.bind(this)}
            />
 <span class="focus-input100" />
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <span class="label-input100">graduatUN</span>
            <input
              class="input100"
              type="text"
              name="graduatUN"
              placeholder="graduatUN"
              value={this.state.graduatUN}
              onChange={this.handleChange1.bind(this)}
            />


            <span class="focus-input100" />
          </div>
          <input type="file" name="image" onChange={this.handleChange} />
          <br />
          <img
            src={this.state.url || "https://via.placeholder.com/150"}
            alt="uploaded image"
            height="150"
            width="200"
          />
          <br />
          <br />
          
          <br />
          <button onClick={this.handleUpload.bind(this)}>Upload</button>
          <br />
          <br />
          
          <div class="container-login100-form-btn">
                  <div class="wrap-login100-form-btn">
                      <div class="login100-form-bgbtn"></div>

         
            <br />
            <br />
           
            <button onClick={this.onclick.bind(this)}
            id="button1"
            >SIGN UP</button>



            </div>
            <br />
            <br />
            <div class="wrap-login100-form-btn">
                      <div class="login100-form-bgbtn"></div>
            <NavLink to="/signInLow">
              <button
              id="button1"
              
              >SIGN IN</button>
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
   

    {/* // <!--===============================================================================================--> */}
    {/* <script src="vendor/jquery/jquery-3.2.1.min.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="vendor/animsition/js/animsition.min.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="vendor/bootstrap/js/popper.js"></script> */}
    {/* <script src="vendor/bootstrap/js/bootstrap.min.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="vendor/select2/select2.min.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="vendor/daterangepicker/moment.min.js"></script> */}
    {/* <script src="vendor/daterangepicker/daterangepicker.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="vendor/countdowntime/countdowntime.js"></script> */}
    {/* <!--===============================================================================================--> */}
    {/* <script src="js/main.js"></script> */}
 

  {/* 
  <section class="hero-banner">
    <div class="hero-banner__content text-center">
      <h1>We Well Understand Your Intention</h1>
      <a class="button" href="#">
        Make an Appoinment
      </a>
    </div>
  </section> */}
</div>
</center>
      </div>
      </center>
    );
  }
}
export default lowerInf;
