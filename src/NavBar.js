import React from "react";
import logo from "./styles/cherryboxLogo_white.png";
import "./styles/Header.css";

function NavBar(props) {
  return (
    <div>
      <ul className="nav">
        <li className="nav">
          <a href="#download" id="nav-logo">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav">
          <a className="menu" href="#contact" id="nav-contact-button">
            CONTACT
          </a>
        </li>
        <li className="nav">
          <a className="menu" href="#feature" id="nav-feature-button">
            FEATURE
          </a>
        </li>
        <li className="nav">
          <a className="menu" href="#download" id="nav-download-button">
            DOWNLOAD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
