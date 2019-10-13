import React from "react";
import "./styles/Header.css";
import proto from "./styles/header.png";

function Header(props) {
  return (
    <div class="header product-wrap" id="download">
      <img src={proto} class="product-img" alt="product-img" />
      <div class="product-description">
        <br />
        <br />
        <br />
        <br />
        <a
          href="http://www.triple3e.com"
          class="product-download"
          id="cocktailDownload"
        >
          {" "}
          Cocktail 다운로드{" "}
        </a>
        <br />
        <a href="#feature" class="product-about" id="detail">
          자세히 알아보기
        </a>
      </div>
    </div>
  );
}

export default Header;
