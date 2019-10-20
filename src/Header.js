import React from "react";
import "./styles/Header.css";
import proto from "./styles/product-img.png";

function Header(props) {
  return (
    <div class="header product-wrap" id="download">
      <img
        src={proto}
        class="product-img"
        alt="product-img"
        id="product-img-pc"
      />
      <img
        src={proto}
        class="product-img-mobile"
        alt="product-img-mobile"
        id="product-img-mobile"
      />
      <div class="product-description">
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://github.com/CherryBoxIDE/cocktail/releases/download/v0.0.0/Cocktail.dmg"
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
