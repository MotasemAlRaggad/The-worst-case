import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         motasem:[]
        }
    }
    componentDidMount () {
        fetch("/signUp")
        .then(res => res.json())
        .then(motasem => this.setState({motasem},() => console.log("raggad111",motasem)))
    }

    render() {

        return (
            <div>

                <input />
                <input />
                <input />



                <NavLink to="signUp">
                    <button>
                        signUp
      </button>
                </NavLink>


            </div>

        )
    }

}

export default signup