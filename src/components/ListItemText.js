import React from "react";
import styled from "@emotion/styled";
const ListItemInnerText = styled.div`
  flex-grow: 1;
  padding: 2px 0;
  & > h2 {
    font-size: 0.85em;
    margin: 0;
    font-family: "Lobster";
  }
  & > p {
    font-size: 0.8em;
    margin: 0;
  }
`;

function ListItemText({ title, price, region, rating, author, description }) {
  return (
    <>
      <ListItemInnerText>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{region}</p>
        <p>{rating}</p>
        <p>{author}</p>
      </ListItemInnerText>
    </>
  );
}

export default ListItemText;
