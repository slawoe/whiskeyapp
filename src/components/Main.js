import React from "react";
import styled from "@emotion/styled";
import Background from "../assets/whiskey.jpg";

const MainContainer = styled.main`
  border-radius: 8px;
  overflow: auto;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image: url(../assets/whiskey.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`;

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Main;
