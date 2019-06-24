import React from "react";
import { storage } from "./firebase";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
class signUpClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      id: "",
      phoneNumber: "",
      image: null,
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
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
            // console.log(url)
          });
      }
    );
  }
  changed(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onclick() {
    var data = this.state;
    fetch("http://localhost:5000/reg-Client", {
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
      <div>
        <body>
          <center>
            <input
              value={this.state.username}
              label="username"
              type="text"
              placeholder="username"
              onChange={this.handleChange1.bind(this)}
              name="username"
            />
            <br />

            <input
              value={this.state.password}
              label="password"
              type="text"
              placeholder="password"
              onChange={this.handleChange1.bind(this)}
              name="password"
            />

            <br />

            <input
              value={this.state.workkinghours}
              label="id"
              type="text"
              placeholder="id"
              name="id"
              onChange={this.handleChange1.bind(this)}
            />

            <br />

            <input
              value={this.state.phoneNumbers}
              label="phoneNumber"
              type="text"
              placeholder="PhoneNumber"
              onChange={this.handleChange1.bind(this)}
              name="phoneNumber"
            />

            <br />

            <input
              type="file"
              name="image"
              onChange={this.handleChange}
              
            />

            <br />
            <br />
            <button onClick={this.handleUpload.bind(this)}>Upload</button>
            <img
              src={this.state.url || "https://via.placeholder.com/150"}
              alt="uploaded image"
              height="150"
              width="200"
            />

            <button onClick={this.onclick.bind(this)}>sign Up</button>
          </center>
        </body>

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

export default signUpClient;
