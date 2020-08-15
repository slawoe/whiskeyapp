import React from "react";
import "./Img.css";

function Img({ src, alt }) {
  return <img className="listItemImg" src={src} alt={alt} />;
}

export default Img;
