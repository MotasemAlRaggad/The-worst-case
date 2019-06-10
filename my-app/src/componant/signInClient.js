import React from "react";

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class singInClient extends React.Component {


  render() {

    return (
      <div>

        <input />
        <input />
        <NavLink to="lowaer">
          <button>
            singInClient
            </button>
        </NavLink>

        <NavLink to="signUpClient">
          <button>
            signUpClient
      </button>
        </NavLink>

      </div>

    )
  }

}

export default singInClient