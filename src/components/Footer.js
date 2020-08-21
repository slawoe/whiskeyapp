import React from "react";
import styled from "@emotion/styled";
import Image from "./Img";
import Bottle from "../assets/bottle.svg";
import Tumbler from "../assets/tumbler.svg";
import Preferences from "../assets/preferences.svg";

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
  justify-content: space-between;
  align-items: center;
  & > img {
    max-width: 3em;
    max-height: 4em;
  }
`;

function Footer({ children }) {
  return (
    <MainFooter>
      <FooterNavigation>
        <Image src={Bottle} alt="Test" />
        <Image src={Tumbler} alt="Sortiment" />
        <Image src={Preferences} alt="Preferences" />
      </FooterNavigation>
    </MainFooter>
  );
}

export default Footer;
