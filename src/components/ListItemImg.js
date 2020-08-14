import React from "react";
import "./ListItemImg.css";

function ListItemImg({ src, alt }) {
  return <img className="ListItemImg" src={src} alt={alt} />;
}

export default ListItemImg;
