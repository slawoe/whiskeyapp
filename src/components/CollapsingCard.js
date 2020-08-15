import React, { useState } from "react";
import "./CollapsingCard.css";

function CollapsingCard({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activateCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  if (isCollapsed === false) {
    return (
      <>
        <button
          onClick={activateCollapse}
          type="button"
          className="collapsible"
        >
          Open Collapsible
        </button>
        <div className="content">
          <p className="badMF">Lorem ipsum...</p>
        </div>
      </>
    );
  } else if (isCollapsed === true) {
    return (
      <>
        <button
          onClick={activateCollapse}
          type="button"
          className="collapsible"
        >
          Open Collapsible
        </button>
        <div className="content-active">
          <p className="badMF">Lorem ipsum...</p>
        </div>
      </>
    );
  }
}

export default CollapsingCard;
