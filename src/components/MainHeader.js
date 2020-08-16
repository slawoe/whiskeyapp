import React from "react";
import InputField from "./InputField";
import Img from "./Img";
import Logo from "../assets/whiskeymaniacslogo.png";
import Title from "./Title";
import "./MainHeader.css";
function MainHeader({ children }) {
  return (
    <>
      <div className="firstRowHeader">
        <Img src={Logo} alt="logo" />
        <Title thetitle="Whiskey Database"></Title>
      </div>
      <InputField placeholder="Search the right one..." />
    </>
  );
}

export default MainHeader;
