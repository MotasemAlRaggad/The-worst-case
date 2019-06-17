import React from "react";
import {
  BrowserRouter as Router,
  // Route,
  // Link,
  NavLink
} from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
    

        <NavLink to="/signIn">
          <button>signIn</button>
        </NavLink>



        <NavLink to="/lowerInf">
          <button>signUpLower</button>
        </NavLink>


        <NavLink to="/cases">
          <button>enter your case here</button>
        </NavLink>



        <NavLink to="/">
          <button>Home</button>
        </NavLink>


        <NavLink to="/signUpClient">
          <button>signUpClient</button>
        </NavLink>
        <div>
         
        </div>
      </div>
    );
  }
}

export default Home;
