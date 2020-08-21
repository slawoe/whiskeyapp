import React from "react";
import styled from "@emotion/styled";
import LoadingImg from "../assets/whiskeyloading.gif";
import Image from "./Img";

const LoadingScreenContainer = styled.div`
  display: grid;
  height: 75vh;
  grid-template-rows: auto auto;
  align-content: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  & > img {
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius: 50%;
    min-height: 15em;
    max-width: 15em;
    margin: 2em 0 0 0;
  }
  & > p {
    grid-row-start: 2;
    grid-row-end: 3;
    font-family: "Lobster";
    font-size: 2em;
    text-align: center;
    margin: 2em 0 0 0;
  }
`;
function LoadingScreen({ props }) {
  return (
    <LoadingScreenContainer className="loadingScreen">
      <Image src={LoadingImg} alt="filling glass of whiskey Loading" />
      <p>Loading...</p>
    </LoadingScreenContainer>
  );
}

export default LoadingScreen;
