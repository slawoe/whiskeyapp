import React from "react";
import "./ListItemImg.css";

function ListItemImg({ src, alt }) {
  return <img className="listItemImg" src={src} alt={alt} />;
}

export default ListItemImg;
