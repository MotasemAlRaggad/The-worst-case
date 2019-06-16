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

      // {/* <div>
      // <section className="header-top d-none d-sm-block">
      //   <div className="container">
      //     <div className="d-sm-flex justify-content-between">
      //       <ul className="header-top__info mb-2 mb-sm-0">
      //         <li>
      //           <a href="tel:+01432152323">
      //             <span className="align-middle">
      //               <i className="ti-mobile" />
      //             </span>
      //             0780437773
      //           </a>
      //         </li>
      //         <li>
      //           <a href="motasem6236@gmail.com">
      //             <span className="align-middle">
      //               <i className="ti-email" />
      //             </span>
      //             motasem6236@gmail.com
      //           </a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </section>

      // <header class="header_area">
      //   <div class="main_menu">
      //     <nav class="navbar navbar-expand-lg navbar-light">
      //       <div class="container box_1620">
      //         <a class="navbar-brand logo_h" href="index.html">
      //           <img src="img/logo.png" alt="" />
      //         </a>
      //         <button
      //           class="navbar-toggler"
      //           type="button"
      //           data-toggle="collapse"
      //           data-target="#navbarSupportedContent"
      //           aria-controls="navbarSupportedContent"
      //           aria-expanded="false"
      //           aria-label="Toggle navigation"
      //         >
      //           <span class="icon-bar" />
      //           <span class="icon-bar" />
      //           <span class="icon-bar" />
      //         </button>

      //         <div
      //           class="collapse navbar-collapse offset"
      //           id="navbarSupportedContent"
      //         >
      //           <ul class="nav navbar-nav menu_nav justify-content-end">
      //             <li class="nav-item active">
      //               <a class="nav-link" href="HomePage">
      //                 Home
      //               </a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link" href="signInClient">
      //                 signInClient
      //               </a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link" href="services.html">
      //                 Services
      //               </a>
      //               <li class="nav-item submenu dropdown">
      //                 <a
      //                   href="#"
      //                   class="nav-link dropdown-toggle"
      //                   data-toggle="dropdown"
      //                   role="button"
      //                   aria-haspopup="true"
      //                   aria-expanded="false"
      //                 >
      //                   Pages
      //                 </a>
      //                 <ul class="dropdown-menu">
      //                   <li class="nav-item">
      //                     <a class="nav-link" href="blog.html">
      //                       Blog
      //                     </a>
      //                   </li>
      //                   <li class="nav-item">
      //                     <a class="nav-link" href="blog-details.html">
      //                       Blog Details
      //                     </a>
      //                   </li>
      //                 </ul>
      //               </li>
      //               <li class="nav-item" />
      //               <a class="nav-link" href="contact.html">
      //                 Contact
      //               </a>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </nav>
      //   </div>
      // </header>
      // <input />
      // <input />

      // <NavLink to="signUp">
      //   <button>signUp</button>
      // </NavLink>

      /* <div>
            <footer class="footer-area" />
            <div class="container">
              <div class="row">
                <div class="col-lg-3  col-md-6 col-sm-6">
                  <div class="single-footer-widget">
                    <h6>About Agency</h6>
                    <p>
                      The world has become so fast paced that people don’t want
                      to stand by reading a page of information, they would much
                      rather look at a presentation and understand the message.
                      It has come to a point
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-footer-widget">
                    <h6>Navigation Links</h6>
                    <div class="row">
                      <div class="col">
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Feature</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <ul>
                          <li>
                            <a href="#">Team</a>
                          </li>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3  col-md-6 col-sm-6">
                  <div class="single-footer-widget">
                    <h6>Newsletter</h6>
                    <p>
                      For business professionals caught between high OEM price
                      and mediocre print and graphic output.
                    </p>
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                        class="subscription relative"
                      />
                      <div class="input-group d-flex flex-row">
                        <input
                          name="EMAIL"
                          placeholder="Email Address"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Email Address '"
                          required=""
                          type="email"
                        />
                        <button class="btn bb-btn">
                          <span class="lnr lnr-location" />
                        </button>
                      </div>
                      <div class="mt-10 info" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3  col-md-6 col-sm-6">
                  <div class="single-footer-widget mail-chimp">
                    <h6 class="mb-20">InstaFeed</h6>
                    <ul class="instafeed d-flex flex-wrap" />
                    <li>
                      <img src="img/instagram/i1.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i2.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i3.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i4.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i5.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i6.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i7.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/instagram/i8.jpg" alt="" />
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              <div class="container">
                <div class="row align-items-center">
                  <p class="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left" />

                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
           Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
           <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */
      /* <div class="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
                    <a href="#">
                      <i class="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i class="fab fa-dribbble" />
                    </a>
                    <a href="#">
                      <i class="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */
      // </div> */}
    );
  }
}

export default signIn;
