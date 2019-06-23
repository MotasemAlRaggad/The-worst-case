import React from "react";
import { storage } from "../firebase";
class imageupload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    console.log()
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
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default imageupload;
