import React from "react";

class cases extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
           
            cases: ""
          
        };
      }
      onclick() {
        console.log("data hear");
        fetch("http://localhost:5000/cases", {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: { "Content-Type": "application/json" }
        }).then(res => {
          
        });
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
  render() {
    return (
      <div>
        <center>
          <p>We Well Understand Your Intention and you will have a Free Case Evaluation</p>
          <input id="form" type="text" 
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
