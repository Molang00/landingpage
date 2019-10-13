import React from "react";
import logo from "./styles/cherryboxLogo_white.png";
import "./styles/Header.css";

function NavBar(props) {
  return (
    <div>
      <ul class="nav">
        <li class="nav">
          <a href="#download" id="nav-logo">
            <img class="logo" src={logo} alt="logo" />
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#contact" id="nav-contact-button">
            CONTACT
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#feature" id="nav-feature-button">
            FEATURE
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#download" id="nav-download-button">
            DOWNLOAD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
