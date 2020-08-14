import React from "react";
import InputField from "./InputField";
import ListItemImg from "./ListItemImg";
import Logo from "../assets/whiskeymaniacslogo.png";
import Title from "./Title";
import "./MainHeader.css";
function MainHeader({ children }) {
  return (
    <>
      <Title thetitle="Whiskey Database"></Title>
      <div className="secondRowHeader">
        <ListItemImg src={Logo} alt="logo" />
        <InputField placeholder="Get the Whiskey..." />
      </div>
    </>
  );
}

export default MainHeader;
