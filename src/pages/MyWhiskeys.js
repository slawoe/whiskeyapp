import React from "react";
import styled from "@emotion/styled";

const MyWhiskeyContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Title() {
  return (
    <MyWhiskeyContainer>Yay, you chosed to stay sober!</MyWhiskeyContainer>
  );
}

export default Title;
