import React from "react";
import "./Img.css";

function ListItemImg({ src, alt }) {
  return <img className="listItemImg" src={src} alt={alt} />;
}

export default ListItemImg;
