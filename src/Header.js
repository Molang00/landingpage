import React from "react";
import "./styles/Header.css";
import proto from "./styles/product-img-qt.png";
import { isMobile, isTablet, osName } from "react-device-detect";
import { Fragment } from "react";

function getDownloadButton() {
  if (isMobile === true || isTablet === true) {
    return (
      <div className="product-download" id="cocktailDownload">
        {" "}
        Start with PC{" "}
      </div>
    );
  } else if (osName === "Mac OS") {
    return (
      <Fragment>
        <a
          href="https://github.com/CherryBoxIDE/cocktail/releases/download/v0.0.0/Cocktail.dmg"
          className="product-download"
          id="cocktailDownload"
        >
          {" "}
          Cocktail Download{" "}
        </a>
        <br />
      </Fragment>
    );
  } else {
    return (
      <div className="product-download" id="cocktailDownload">
        {" "}
        Cocktail Landing{" "}
      </div>
    );
  }
}

function Header(props) {
  console.log(osName);
  return (
    <div className="header product-wrap" id="download">
      <img
        src={proto}
        className={isMobile === true ? "product-img-mobile" : "product-img"}
        alt="product-img"
        id="product-img"
      />
      <div className="product-description">
        {getDownloadButton()}
        <a href="#feature" className="product-about" id="detail">
          more detail
        </a>
      </div>
    </div>
  );
}

export default Header;
