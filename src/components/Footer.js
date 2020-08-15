import React from "react";
import Img from "./Img";
import Bottle from "../assets/bottle.svg";
import Tumbler from "../assets/tumbler.svg";
import Preferences from "../assets/preferences.svg";
import "./Footer.css";

function Footer({ children }) {
  return (
    <nav className="footerWrapper">
      <Img src={Bottle} alt="Wishlist" />
      <Img src={Tumbler} alt="Sortiment" />
      <Img src={Preferences} alt="Preferences" />
    </nav>
  );
}

export default Footer;
