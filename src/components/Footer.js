import React from "react";
import styled from "@emotion/styled";
import Image from "./Img";
import Bottle from "../assets/bottle.svg";
import Tumbler from "../assets/tumbler.svg";
import Preferences from "../assets/preferences.svg";
import { Link } from "react-router-dom";

const MainFooter = styled.footer`
  margin: 0 10px;
  max-height: 5em;
  object-fit: contain;
  grid-row-start: 3;
  grid-row-end: 4;
  background: white;
  padding-top: 3px;
`;

const FooterNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 5px;
  & > a > img {
    height: 2em;
    width: 2em;
  }
`;

function Footer({ children }) {
  return (
    <MainFooter>
      <FooterNavigation>
        <Link to="/">
          <Image src={Bottle} alt="MyWhiskeys" />
        </Link>
        <Link to="/my">
          <Image src={Tumbler} alt="MySortiment" />
        </Link>
        <Link to="/add">
          <Image src={Preferences} alt="AddWhiskeys" />
        </Link>
      </FooterNavigation>
    </MainFooter>
  );
}

export default Footer;
