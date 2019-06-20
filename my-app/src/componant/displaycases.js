import React from "react";
import {
    BrowserRouter as Router,
    Route,
    // Link,
    NavLink
  } from "react-router-dom";

class displaycases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Cases: [
        {
     
        }
      ]
    };
  }
  componentWillMount() {
    this.getInfo();
  }
  getInfo() {
    // event.preventDefault();

    fetch("http://localhost:5000/get-cases", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        this.setState({ Cases: newData });
      });
  }
  render() {
    return (  
      <div >
      <div class="grid-container">
        {this.state.Cases.map(cas => (
          <div id="item1">
              <NavLink to ="user">
              <button>
            {cas.name}
        </button>
        </NavLink>
        <br>
        </br>
        {cas.phonNumber}
        <br>

        </br>
        {cas.lawyer}
        <br>
        
        </br>
        {cas.typeOfTheCase}
        <br>
        </br>
        {cas.cases}
        <br>
        </br>
          </div>
        ))}
      </div>
      </div> 
    );
  }
}


export default displaycases;
