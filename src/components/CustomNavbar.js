import React, { Component } from "react";
import {} from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <div className="custom-navbar background-light">
        <p className="custom-navbar-title">Isaac Medina</p>
        <ul className="custom-navbar-links">
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="/resume">
              Resume
            </a>
          </li>
          <li className="custom-navbar-li">
            <a className="custom-navbar-link primary" href="/blog">
              Blog
            </a>
          </li>
          <li className="custom-navbar-li">
            <a id="contactMeBtn" href="/contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CustomNavbar;