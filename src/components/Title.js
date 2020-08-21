import React from "react";
import styled from "@emotion/styled";

const MainTitle = styled.h1`
  color: black;
  font-family: "Lobster";
  font-size: 3em;
  margin: 0;
`;

function Title({ thetitle }) {
  return <MainTitle>{thetitle}</MainTitle>;
}

export default Title;
