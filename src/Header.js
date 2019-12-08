import React from "react";
import { FormattedMessage } from "react-intl";
import "./styles/Header.css";
import proto from "./images/proto-pink.png";
import { isMobile, isTablet, osName } from "react-device-detect";
import { Fragment } from "react";

function getDownloadButton() {
  if (isMobile === true || isTablet === true) {
    return (
      <div className="product-download" id="cocktailDownload">
        {" "}
        <FormattedMessage
          id="header.mobile.startWithPC"
          defaultMessage="Start with PC"
        />{" "}
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
          <FormattedMessage
            id="header.pc.mac.downloadButton"
            defaultMessage="Download Cocktail"
          />{" "}
        </a>
        <br />
      </Fragment>
    );
  } else {
    return (
      <div className="product-download" id="cocktailDownload">
        {" "}
        <FormattedMessage
          id="header.pc.downloadButton"
          defaultMessage="Download Cocktail"
        />{" "}
      </div>
    );
  }
}

function Header(props) {
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
          <FormattedMessage
            id="header.pc.moreDetail"
            defaultMessage="more detail"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
