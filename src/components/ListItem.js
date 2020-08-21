import React from "react";
import styled from "@emotion/styled";

const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  & > img {
    max-height: 2em;
    max-width: 2em;
    object-fit: contain;
  }
`;

function ListItem({ href, children }) {
  return <ListItemLink href={href}>{children}</ListItemLink>;
}

export default ListItem;
