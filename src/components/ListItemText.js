import React from "react";
import styled from "@emotion/styled";

const ListItemInnerText = styled.div`
  flex-grow: 1;
  & > h2 {
    font-size: 0.85em;
    margin: 0;
  }
  & > p {
    font-size: 0.8em;
    margin: 0;
  }
`;

function ListItemText({ title, price, region, rating, description }) {
  return (
    <ListItemInnerText>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{region}</p>
      <p>{rating}</p>
    </ListItemInnerText>
  );
}

export default ListItemText;
