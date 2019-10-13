import React from "react";
import logo from "./styles/cherryboxLogo_white.png";
import "./styles/Header.css";

function NavBar(props) {
  return (
    <div>
      <ul class="nav">
        <li class="nav">
          <a href="#download" id="top">
            <img class="logo" src={logo} alt="logo" />
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#contact" id="contact">
            CONTACT
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#feature" id="feature">
            FEATURE
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#download" id="download">
            DOWNLOAD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
