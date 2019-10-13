import React from "react";
import "./styles/Footer.css";
import paperplain from "./styles/paper-plane.png";

function Footer() {
  return (
    <div id="contact" class="contact">
      <div class="contact-content">
        <h2>Contact Us</h2>
        <hr />
        <img src={paperplain} class="contact-img" alt="contact"></img>
        <br />
        <a href="mailto: byeongsu.kim@cherrybox.me">Email</a>
      </div>
    </div>
  );
}

export default Footer;
