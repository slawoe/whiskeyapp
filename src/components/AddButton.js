import React from "react";
import styled from "@emotion/styled";

const AddButton = styled.button`
  border: none;
  color: green;
  border-radius: 5px;
  margin: 2px;
  margin-right: 10px;
`;

function AddingButton() {
  return <AddButton>Add</AddButton>;
}

export default AddingButton;
