import React, { useState } from "react";
import "./CollapsingCard.css";

function CollapsingCard(props) {
  const [collapsed, setCollapsed] = useState(false);
  function activateCollapse() {
    console.log("Happy clicking");
  }
  return (
    <>
      <button onClick={activateCollapse} type="button" className="collapsible">
        Open Collapsible
      </button>
      <div class="content">
        <p>Lorem ipsum...</p>
      </div>
    </>
  );
}

export default CollapsingCard;
