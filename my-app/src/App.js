import React from 'react';
// import logo from './logo.svg';
// import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import HomePage from "./componant/HomePage"
import signIn from "./componant/signIn"
import signInClient from "./componant/signInClient"
import signUp from "./componant/signUp"
import signUpclient from "./componant/signUpClient"
import './App.css';

class App extends React.Component {


  
  
  render () {
  return (
    <Router>



       
      

      <NavLink to="HomePage"> 
      <button>
        Home
      </button>
      </NavLink>

      

      


     

      

      <Route path="/HomePage" component={HomePage} />
      <Route path="/signIn" component={signIn} />
      <Route path="/signInClient" component={signInClient} />
      <Route path="/signUp" component={signUp} />
      <Route path="/signUpclient" component={signUpclient} />

    </Router>
  );
}
}
export default App;
