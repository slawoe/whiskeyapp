import React from "react";
import "./ListItemText.css";

function ListItemText({ title, price, region, rating, description }) {
  return (
    <div className="listItemText">
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{region}</p>
      <p>{rating}</p>
    </div>
  );
}

export default ListItemText;
