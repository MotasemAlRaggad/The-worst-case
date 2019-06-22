import React from "react";
import {
    BrowserRouter as Router,
    Route,
    // Link,
    NavLink
  } from "react-router-dom";

class displaycases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Cases: [
        {
     
        }
      ]
    };
  }
  componentWillMount() {
    this.getInfo();
  }
  getInfo() {
    // event.preventDefault();

    fetch("http://localhost:5000/get-cases", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        this.setState({ Cases: newData });
      });
  }
  render() {
    return (  
      <div >
      <div class="grid-container">
        {this.state.Cases.map(cas => (
          <div id="item1">
              <NavLink to ="user">
              <button class="button">
            {cas.name}
        </button>
        </NavLink>
        <br>
        </br>
        <img
                    src="            https://scontent.famm6-1.fna.fbcdn.net/v/t1.0-9/32594133_789270281241893_4680588052748304384_n.jpg?_nc_cat=106&_nc_ht=scontent.famm6-1.fna&oh=cc29b0a7eca753c0f858f148c6aa20c9&oe=5D7EBF3F
"
                  />
        {cas.phonNumber}
        <br>

        </br>
        {cas.lawyer}
        <br>
        
        </br>
        {cas.typeOfTheCase}
        <br>
        </br>
        {cas.cases}
        <br>
        </br>
          </div>
        ))}
      </div>
      </div> 
    );
  }
}


export default displaycases;
