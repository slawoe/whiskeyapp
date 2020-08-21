import React from "react";
import styled from "@emotion/styled";

const Logo = styled.img`
  width: 5em;
  height: 5em;
  object-fit: contain;
`;

function MainLogo({ src, alt }) {
  return <Logo src={src} alt={alt} />;
}

export default MainLogo;
