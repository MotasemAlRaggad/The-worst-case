import React from "react";

class cases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phonNumber: "",
      typeOfTheCase: "",
      cases: ""
    };
  }
  onclick() {
    console.log("data hear");
    fetch("http://localhost:5000/cases", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" }
    }).then(res => {});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <center>
          <p>
            We Well Understand Your Intention and you will have a Free Case
            Evaluation
          </p>
          <section class="hero-banner">
    <div class="hero-banner__content text-center">
      <h1>We Well Understand Your Intention</h1>
      <a class="button" href="#">Make an Appoinment</a>
    </div>
  </section>

          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            name="name"
          />
          <br />
          <br />
          <input
            type="text"
            value={this.state.phonNumber}
            onChange={this.handleChange.bind(this)}
            name="phonNumber"
          />
          <br />
          <br />
          <input
            type="text"
            value={this.state.typeOfTheCase}
            onChange={this.handleChange.bind(this)}
            name="typeOfTheCase"
          />
          <br />
          <br />
          <input
            id="form"
            type="text"
            value={this.state.cases}
            onChange={this.handleChange.bind(this)}
            name="cases"
          />
          <br />
          <br />

          <button onClick={this.onclick.bind(this)}>submit</button>
        </center>
      </div>
    );
  }
}
export default cases;
