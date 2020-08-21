import React from "react";
import styled from "@emotion/styled";

const DeleteButton = styled.button`
  border: none;
  color: red;
  border-radius: 5px;
  margin: 2px;
  margin-right: 10px;
`;

function DeletingButton() {
  return <DeleteButton>Delete</DeleteButton>;
}

export default DeletingButton;
