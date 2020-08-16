import React, { useState } from "react";
import "./CollapsingCard.css";

function CollapsingCard({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activateCollapse = () => {
    setIsCollapsed((collapsed) => !collapsed);
  };

  return (
    <>
      <button onClick={activateCollapse} type="button" className="collapsible">
        Open Collapsible
      </button>
      <div className={isCollapsed ? "content---active" : "content"}>
        <p className="collapsibleP">Lorem ipsum...</p>
      </div>
    </>
  );
}

export default CollapsingCard;
