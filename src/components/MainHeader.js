import React from "react";
import InputField from "./InputField";
import Img from "./Img";
import Logo from "../assets/whiskeymaniacslogo.png";
import Title from "./Title";
import "./MainHeader.css";
function MainHeader({ whiskeyQuery, onWhiskeyQueryChange }) {
  return (
    <>
      <div className="firstRowHeader">
        <Img src={Logo} alt="logo" />
        <Title thetitle="Whiskey Database"></Title>
      </div>
      <input
        value={whiskeyQuery}
        onChange={(event) => {
          onWhiskeyQueryChange(event.target.value);
        }}
        className=""
        placeholder="Get your whiskey"
      ></input>
    </>
  );
}

export default MainHeader;
