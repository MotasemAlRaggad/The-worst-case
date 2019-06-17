import React from "react";

class lowerInf extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{
      name: "",
      phoneNumber: "",
      location: "",
      graduateYear: "",
      graduatUN: ""
    }]
  }

  onclick() {
    var data = this.state;
    console.log(data)
    fetch("http://localhost:5000/lowInf", {
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
          <center>
            <input
              value={this.state.name}
              label="name"
              type="text"
              placeholder="name"
              onChange={this.handleChange.bind(this)}
              name="name"
            />

            <input
              value={this.state.phoneNumber}
              label="phoneNumber"
              type="text"
              placeholder="phoneNumber"
              onChange={this.handleChange.bind(this)}
              name="phoneNumber"
            />

            <input
              value={this.state.location}
              label="location"
              type="text"
              placeholder="location"
              onChange={this.handleChange.bind(this)}
              name="location"
            />

            <input
              value={this.state.graduateYear}
              label="graduateYear"
              type="text"
              placeholder="graduateYear"
              onChange={this.handleChange.bind(this)}
              name="graduateYear"
            />

            <input
              value={this.state.graduatUN}
              label="graduatUN"
              type="text"
              placeholder="graduatUN"
              onChange={this.handleChange.bind(this)}
              name="graduatUN"
            />
            <button onClick={this.onclick.bind(this)}>sign Up</button>
          </center>
        </form>
      </div>
    );
  }
}
export default lowerInf;
