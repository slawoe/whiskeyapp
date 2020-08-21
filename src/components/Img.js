import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  margin: 0 10px;
  max-width: 5em;
  max-height: 5em;
  object-fit: contain;
`;

function Img({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

export default Img;
