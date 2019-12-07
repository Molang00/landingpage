import React from "react";
import logo from "./images/cherryboxLogo_white.png";
import "./styles/Header.css";

function NavBar(props) {
  function changeLanguagetoKo() {
    props.setLocale("ko");
  }

  function changeLanguagetoEn() {
    props.setLocale("en");
  }

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
        <li className="nav">
          <button onClick={changeLanguagetoEn}>English</button>
        </li>
        <li className="nav">
          <button onClick={changeLanguagetoKo}>한국어</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
