import React from "react";

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
      <div>
        {this.state.Cases.map(cas => (
          <div>
            {cas.cases}
        
          </div>
        ))}
      </div>
    );
  }
}


export default displaycases;
