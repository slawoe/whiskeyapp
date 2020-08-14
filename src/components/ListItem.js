import React from "react";
import "./ListItem.css";

function ListItem({ href, children }) {
  return (
    <a className="ListItem" href={href}>
      {children}
    </a>
  );
}

export default ListItem;
