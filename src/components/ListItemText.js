import React from "react";
import styled from "@emotion/styled";

const ListItemInnerText = styled.div`
  flex-grow: 1;
  padding: 2px 0;
  & > h2 {
    font-size: 0.85em;
    margin: 0;
  }
  & > p {
    font-size: 0.8em;
    margin: 0;
  }
`;

const AddButton = styled.button`
  border: 1px solid black;
  color: green;
  border-radius: 2px;
  margin: 2px;
`;
const DeleteButton = styled.button`
  border: 1px solid black;
  color: red;
  border-radius: 2px;
  margin: 2px;
`;

function ListItemText({ title, price, region, rating, description }) {
  return (
    <>
      <ListItemInnerText>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{region}</p>
        <p>{rating}</p>
      </ListItemInnerText>
      <AddButton>+</AddButton>
      <DeleteButton>x</DeleteButton>
    </>
  );
}

export default ListItemText;
