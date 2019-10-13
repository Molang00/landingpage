import React from "react";
import logo from "./styles/cherryboxLogo.png";
import "./styles/Header.css";

function NavBar(props) {
  return (
    <div>
      <ul class="nav">
        <li class="nav">
          <a href="#download">
            <img class="logo" src={logo} alt="logo" />
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#contact">
            CONTACT
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#feature">
            FEATURE
          </a>
        </li>
        <li class="nav">
          <a class="menu" href="#download">
            DOWNLOAD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
