import React from "react";
import { storage } from "../firebase";
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
      <div>
        
          <center>
            <input
              value={this.state.name}
              label="name"
              type="text"
              placeholder="name"
              onChange={this.handleChange1.bind(this)}
              name="name"
            />

            <input
              value={this.state.phoneNumber}
              label="phoneNumber"
              type="text"
              placeholder="phoneNumber"
              onChange={this.handleChange1.bind(this)}
              name="phoneNumber"
            />

            <input
              value={this.state.location}
              label="location"
              type="text"
              placeholder="location"
              onChange={this.handleChange1.bind(this)}
              name="location"
            />

             <input
              value={this.state.graduateYear}
              label="graduateYear"
              type="text"
              placeholder="graduateYear"
              onChange={this.handleChange1.bind(this)}
              name="graduateYear"
            />

             <input
              value={this.state.graduatUN}
              label="graduatUN"
              type="text"
              placeholder="graduatUN"
              onChange={this.handleChange1.bind(this)}
              name="graduatUN"
            />
<br />
<br />
<br />
<br />
<br />      
<input type="file" name="image" onChange={this.handleChange} />
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
        
      </div>
    );
  }
}
export default lowerInf;
