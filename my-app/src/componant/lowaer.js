import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  NavLink
} from "react-router-dom";

class lowaer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Lower: [{}]
    };
  }
  componentWillMount() {
    this.getInfo();
  }
  getInfo() {
    // event.preventDefault();

    fetch("http://localhost:5000/raggad", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(newData => {
        // console.log(newData);
        this.setState({ Lower: newData });
      });
  }
  render() {
    return (
      <div class="grid-container">
        {this.state.Lower.map((low, i) => (
          <ul key={i}>
            <div id="item1">
              <NavLink to="cases">
                <button class="button">{low.name}</button>
              </NavLink>
              <br />

              
              <img
                src={low.url || "https://via.placeholder.com/200"}
                alt="uploaded image"
                id="size"
              />
              <br />
              {low.phoneNumber}
              <br />
              {low.location}
              <b />
              {low.graduateYear}
              <br />
              {low.graduatUN}
            </div>
          </ul>
        ))}
      </div>
    );
  }
}

export default lowaer;
