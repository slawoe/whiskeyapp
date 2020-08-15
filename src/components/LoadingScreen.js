import React from "react";
import LoadingImg from "../assets/whiskeyloading.gif";
import Img from "./Img";
import "./LoadingScreen.css";

function LoadingScreen({ props }) {
  return (
    <div className="loadingScreen">
      <Img src={LoadingImg} alt="filling glass of whiskey Loading" />
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
