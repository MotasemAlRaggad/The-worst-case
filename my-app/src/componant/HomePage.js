import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class Home extends React.Component {



    render() {
        return (
<section className="header-top d-none d-sm-block">
    <div className="container">
      <div className="d-sm-flex justify-content-between">
        <ul className="header-top__info mb-2 mb-sm-0">
          <li><a href="tel:+01432152323"><span className="align-middle"><i className="ti-mobile"></i></span>+014 321 523 23</a></li>
          <li><a href="mailto:info@example.com"><span className="align-middle"><i className="ti-email"></i></span>Info@example.com</a></li>
        </ul>
        <ul className="header-top__social">
          <li><a href="#"><i className="ti-facebook"></i></a></li>
          <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
          <li><a href="#"><i className="ti-instagram"></i></a></li>
          <li><a href="#"><i className="ti-skype"></i></a></li>
        </ul>
      </div>
    </div>
  </section>
//             <form>
//             <div> 
//                  <NavLink to="/signIn"><button>
//                 signIn
//           </button>

//             </NavLink>

//                 <NavLink to="/signInClient"><button>
//                     signInClient
// </button>

//                 </NavLink>
//             </div>
//             </form>

        )
    }
}

export default Home