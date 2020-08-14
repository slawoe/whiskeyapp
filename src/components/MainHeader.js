import React from "react";
import InputField from "./InputField";
import ListItemImg from "./ListItemImg";
import Logo from "../assets/whiskeymaniacslogo.png";
import Title from "./Title";
function MainHeader({ children }) {
  return (
    <>
      <Title thetitle="Whiskey Database"></Title>
      <ListItemImg src={Logo} alt="logo" />
      <InputField placeholder="Get the Whiskey..." />
    </>
  );
}

export default MainHeader;
