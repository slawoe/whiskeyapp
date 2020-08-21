import React, { useState } from "react";
import styled from "@emotion/styled";

function CollapsingCard({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activateCollapse = () => {
    setIsCollapsed((collapsed) => !isCollapsed);
  };

  const CollapsingCardButton = styled.button`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100vw;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  `;

  const CollapsingCardTextContainer = styled.div`
    display: ${(props) => (props.isCollapsed ? "none" : "block")};
    overflow: ${(props) => (props.isCollapsed ? "hidden" : "auto")};
  `;

  const CollapsingCardText = styled.p`
    margin: 0;
    background: white;
    padding: 18px;
  `;
  return (
    <>
      <CollapsingCardButton onClick={activateCollapse} type="button">
        Open Collapsible
      </CollapsingCardButton>
      <CollapsingCardTextContainer>
        <CollapsingCardText>Lorem ipsum...</CollapsingCardText>
      </CollapsingCardTextContainer>
    </>
  );
}

export default CollapsingCard;
