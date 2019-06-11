import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            motasem: []
        }
    }
    onclick(){
        console.log("nhy")
        fetch("http://localhost:5000")
      }
      
    

    render() {

        return (
            <div>

                <input />
                <input />
                <input />



                <NavLink to="signUp">
                    <button button onClick={this.onclick.bind(this)}>
                        signUp
      </button>
                </NavLink>


            </div>

        )
    }

}

export default signup;