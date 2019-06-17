import React from "react";
import {
  BrowserRouter as
  // Router,
  // Route,
  // Link,
  NavLink
} from "react-router-dom";

class signIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  // onclick
  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/lowaer');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }


 

  render() {
    return (
      <div>
        <form  onSubmit={this.onSubmit}>
          <body>
            <center>
              <input
                value={this.state.username}
                label="username"
                type="text"
                placeholder="username"
                onChange={this.handleInputChange.bind(this)}
                name="username"
              />
              <br />

              <input
                value={this.state.password}
                label="password"
                type="text"
                placeholder="password"
                onChange={this.handleInputChange.bind(this)}
                name="password"
              />
               <input type="submit" value="Submit"/>
              {/* <NavLink to="lowaer">
                <button onClick={this.onclick.bind(this)}>signIn</button>
              </NavLink> */}
            </center>
          </body>
        </form>
      </div>

      
    );
  }
}

export default signIn;
