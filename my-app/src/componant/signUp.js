


import React from "react";



import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

class signUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { first_name, last_name, password, email, phone } = this.state;

    fetch('http://localhost:5000' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    console.log("raggad")
    .then((result) => result.json())
    .then((info) => { console.log(info); })
 
}

      render() {
        const { classes } = this.props;
        const { first_name, last_name, password, email, phone } = this.state;
        return (
          <div className="session">
          <h1>Create your Account</h1>
            <div className="register-form">
              <form method='POST' action='http://localhost:5000'>
                <input label="First Name" name="first_name" />
                <br/>
                <input label="Last Name" name="last_name" />
                <br/>
                <input label="Email" name="email" />
                <br/>
                <input label="Password" name="password" />
                <br/>    
                <input label="Phone #" name="phone" />
                <NavLink to="lowaer">                <button type='Submit' variant="contained" color="primary">
                  signUp 
                </button>
                </NavLink>

              </form>
            </div>
          </div>
        );
      };
    }

    export default signUp;
// class signup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//       phone: ''
//     }
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     // get form data out of state
//     const { first_name, last_name, password, email, phone } = this.state;

//     fetch('http://localhost:5000/signUp' , {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       }
//       .then((result) => {
//         console.log(result)
//       })
//   })
// }

//     render() {

//         return (
//             <div>

// <header class="header_area" >
//     <div class="main_menu">
//       <nav class="navbar navbar-expand-lg navbar-light">
//         <div class="container box_1620">
//           <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//           </button>

//           <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
//             <ul class="nav navbar-nav menu_nav justify-content-end">
//               <li class="nav-item active"><a class="nav-link" href="HomePage">Home</a></li> 
//               <li class="nav-item"><a class="nav-link" href="signInClient">signInClient</a></li> 
//               <li class="nav-item"><a class="nav-link" href="services.html">Services</a>
//               <li class="nav-item submenu dropdown">
//                 <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
//                   aria-expanded="false">Pages</a>
//                 <ul class="dropdown-menu">
//                   <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
//                   <li class="nav-item" ><a class="nav-link" href="blog-details.html" >Blog Details</a></li>
//                 </ul>
// 							</li>
//               <li class="nav-item" /><a class="nav-link" href="contact.html" >Contact</a></li>
//             </ul>
//           </div> 
//         </div>
//       </nav>
//     </div>
//   </header>
//                 <input />
//                 <input />
//                 <input />



//                 <NavLink to="signUp">
//                     <button type='Submit' variant="contained" color="primary">
//                         signUp
//       </button>
//                 </NavLink>


//             </div>

//         )
//     }

// }

// export default signup;