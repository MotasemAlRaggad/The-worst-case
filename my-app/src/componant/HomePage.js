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
          <button>Client Page</button>
        </NavLink>

        

 <NavLink to="/signInLow">
          <button>Lower Page</button>
        </NavLink>


        <NavLink to="/cases">
          <button>enter your case here</button>
        </NavLink>

        <NavLink to="/">
          <button>Home</button>
        </NavLink>
       
        

        <div />
      </div>
    );
  }
}

export default Home;
