import React, {Component} from "react";
import Navbar from "./navbar.js";

//import css / img
import irtLogo from "../IRT.png";

class Header extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src={irtLogo} alt="" />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Navbar />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
