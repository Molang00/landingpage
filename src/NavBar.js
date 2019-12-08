import React, { useState } from "react";
import logo from "./images/cherryboxLogo_white.png";
import "./styles/Header.css";

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function changeLanguagetoKo() {
    props.setLocale("ko");
    setIsMenuOpen(false);
  }

  function changeLanguagetoEn() {
    props.setLocale("en");
    setIsMenuOpen(false);
  }

  function renderSubMenu() {
    return isMenuOpen ? (
      <ul className="subMenu" id="mobile_user">
        <li className="subMenu">
          <a
            className="menu"
            href="#download"
            id="nav-download-button"
            onClick={() => setIsMenuOpen(false)}
          >
            DOWNLOAD
          </a>
        </li>
        <li className="subMenu">
          <a
            className="menu"
            href="#feature"
            id="nav-feature-button"
            onClick={() => setIsMenuOpen(false)}
          >
            FEATURE
          </a>
        </li>
        <li className="subMenu">
          <a
            className="menu"
            href="#contact"
            id="nav-contact-button"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </li>
        <li className="subMenu">
          <button onClick={changeLanguagetoKo}>한국어</button>
        </li>
        <li className="subMenu">
          <button onClick={changeLanguagetoEn}>English</button>
        </li>
      </ul>
    ) : null;
  }

  return (
    <div>
      <ul className="nav" id="pc_user">
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

      <ul className="nav" id="mobile_user">
        <li className="nav">
          <a href="#download" id="nav-logo">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav">
          <div
            className="menuToggle"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </li>
      </ul>
      {renderSubMenu()}
    </div>
  );
}

export default NavBar;
