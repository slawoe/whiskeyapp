import React from "react";
import MainLogo from "./MainLogo";
import Logo from "../assets/whiskeymaniacslogo.png";
import Title from "./Title";
import styled from "@emotion/styled";

const Header = styled.header`
  display: grid;
  place-items: center;
  font-size: 0.6em;
  padding-bottom: 5px;
  grid-row-start: 1;
  grid-row-end: 2;
  background: white;
  margin-bottom: 10px;
  & > input {
    border-radius: 5px 2px 5px 2px;
  }
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

function MainHeader({ whiskeyQuery, onWhiskeyQueryChange }) {
  return (
    <>
      <Header>
        <HeaderTitleContainer>
          <MainLogo src={Logo} alt="logo" />
          <Title thetitle="Whiskey Database"></Title>
        </HeaderTitleContainer>
        <input
          value={whiskeyQuery}
          onChange={(event) => {
            onWhiskeyQueryChange(event.target.value);
          }}
          placeholder="Get your whiskey"
        ></input>
      </Header>
    </>
  );
}

export default MainHeader;
