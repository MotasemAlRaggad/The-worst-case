import React from "react";
// import logo from './logo.svg';
// import { NavLink } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  // NavLink
} from "react-router-dom";
import HomePage from "./componant/HomePage";
import signIn from "./componant/signIn";
import signUpClient from "./componant/signUpClient";
import signUp from "./componant/signUp";
// import signUpclient from "./componant/signUpClient";
import lowerInf from "./componant/lowerInf";
// import Header from "./componant/Header";
// import footer from "./componant/footer";
import lowaer from "./componant/lowaer";
import cases from "./componant/cases";
import displaycases from "./componant/displaycases";
import signInLow from "./componant/signIn-low";
import singUplow from "./componant/signUpLow";
import user from "./componant/user";

import "./App.css";

class App extends React.Component {
  

  render() {
    return (
      <div>
       
        <Router>
          {/* <NavLink to="lowaer"> 
    <button onClick={this.onclick.bind(this)}> go
      </button>
      </NavLink> */}

          

          <Route path="/lowaer" component={lowaer} />
          {/* <Route path="/footer" component={footer} /> */}
          {/* <Route path="/Header" component={Header} /> */}
          <Route path="/HomePage" component={HomePage} />
          <Route path="/signIn" component={signIn} />
          <Route path="/signUpClient" component={signUpClient} />
          <Route path="/signUp" component={signUp} />
          {/* <Route path="/signUpclient" component={signUpclient} /> */}
          <Route path="/lowerInf" component={lowerInf} />
          <Route path="/cases" component={cases} />
          <Route path="/displaycases" component={displaycases} />
          <Route path="/signInLow" component={signInLow} />
          <Route path="/singUplow" component={singUplow} />
          <Route path="/user" component={user} />
          
        </Router>
      </div>
    );
  }
}
export default App;
