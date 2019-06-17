
import React from "react"

class lowaer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
       data : [{
      name: "",
      phoneNumber: "",
      location: "",
      graduateYear: "",
      graduatUN: ""
       }]
  }
 
  }

 componentDidMount() {
    fetch('/raggad'), {
      method : "get",
      headers: { "Content-Type": "application/json"}
    }
      .then(response => response.json())
      .then(data => this.setState({ data: data.data  }));
 }
  render() {
    
 
    return (
        <div >
      
    
   
      
      </div>
    );
  }
}

export default lowaer;