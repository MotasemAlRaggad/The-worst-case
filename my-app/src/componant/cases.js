import React from "react";
import { storage } from "./firebase";
class cases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phonNumber: "",
      lawyer: "",
      typeOfTheCase: "",
      cases: "",
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
    console.log("data hear");
    fetch("http://localhost:5000/cases", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" }
    }).then(res => {});
  }

  handleChange1(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
      
          {/* <section class="hero-banner">
            <div class="hero-banner__content text-center">
              <h1>We Well Understand Your Intention</h1>
            </div>
          </section> */}
          <div>
<div class="limiter">
<div class="container-login100">
  <div class="login100-more1" />
    <center>
    
    

          <input
            type="text"
            class="input100"
            value={this.state.name}
            placeholder="username..."
            onChange={this.handleChange1.bind(this)}
            name="name"
            
          />
          <br />
          <br />
          <input
            type="text"
            class="input100"
            value={this.state.phonNumber}
            onChange={this.handleChange1.bind(this)}
            name="phonNumber"
            placeholder="phonNumber..."
          />

          <br />
          <br />
          <input
            type="text"
            placeholder="lawyer.Name.."
            class="input100"
            value={this.state.lawyer}
            onChange={this.handleChange1.bind(this)}
            name="lawyer"
          />
          <br />
          <br />
          <input
            type="text"

            placeholder="TypeOfTheCase..."
            class="input100"
            value={this.state.typeOfTheCase}
            onChange={this.handleChange1.bind(this)}
            name="TypeOfTheCase"
          />
          <br />
          <br />
          <input
            id="form"
            placeholder="you can write your case..."
            type="text"
            value={this.state.cases}
            onChange={this.handleChange1.bind(this)}
            name="cases"
            class="input100"
          />
          <br />
          <br />
          <br />
          <br />
          <p>you can uplaod file for your case
                   
          </p>

          <br />
          <input
              type="file"
              name="image"
              onChange={this.handleChange}
              
            />
          <br />
          <button onClick={this.handleUpload.bind(this)}>Upload</button>
          <img
            src={this.state.url || "https://via.placeholder.com/150"}
            alt="uploaded image"
            height="150"
            width="200"
          />

          <button onClick={this.onclick.bind(this)}>submit</button>
      </center>
      </div>
      </div>
      
      </div>
       
      </div>

    );
  }
}
export default cases;
