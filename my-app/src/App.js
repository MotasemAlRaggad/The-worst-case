import React from "react";
// import logo from './logo.svg';
// import { NavLink } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import HomePage from "./componant/HomePage";
import signIn from "./componant/signIn";
import signInClient from "./componant/signInClient";
import signUp from "./componant/signUp";
import signUpclient from "./componant/signUpClient";
// import Header from "./componant/Header";
// import footer from "./componant/footer";
import lowaer from "./componant/lowaer";
import "./App.css";

class App extends React.Component {
  onclick() {
    console.log("deasglkmnwsljkhn");
    fetch("/a");
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          <button onClick={this.onclick.bind(this)}> go</button>
        </div>
        <Router>
          {/* <NavLink to="lowaer"> 
    <button onClick={this.onclick.bind(this)}> go
      </button>
      </NavLink> */}

          

          <Route path="/lowaer" component={lowaer} />
          {/* <Route path="/footer" component={footer} /> */}
          {/* <Route path="/Header" component={Header} /> */}
          <Route path="/" component={HomePage} />
          <Route path="/signIn" component={signIn} />
          <Route path="/signInClient" component={signInClient} />
          <Route path="/signUp" component={signUp} />
          <Route path="/signUpclient" component={signUpclient} />
        </Router>
      </div>
    );
  }
}
export default App;
