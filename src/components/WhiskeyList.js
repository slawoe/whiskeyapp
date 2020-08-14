import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListItemImg from "./ListItemImg";
import ListItemText from "./ListItemText";

function WhiskeyList(children) {
  return (
    <List>
      <ListItem>
        <ListItemImg src={"Test"} alt={"Test"} />
        <ListItemText title={"Test"} description={"Test"}></ListItemText>
      </ListItem>
    </List>
  );
}

export default WhiskeyList;
