import React from "react";
import styled from "@emotion/styled";

const ListNavigation = styled.nav``;

function List({ children }) {
  return <ListNavigation className="list">{children}</ListNavigation>;
}

export default List;
