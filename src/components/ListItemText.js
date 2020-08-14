import React from "react";
import "./ListItemText.css";

function ListItemText({ title, description }) {
  return (
    <div className="listItemText">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ListItemText;
