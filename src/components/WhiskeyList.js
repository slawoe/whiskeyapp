import React, { useState, useEffect } from "react";
import List from "./List";
import ListItem from "./ListItem";
import Img from "./Img";
import ListItemText from "./ListItemText";
import fetchWhiskeys from "../api/whiskeys";
import LoadingScreen from "./LoadingScreen";
import "./WhiskeyList.css";

function WhiskeyList({ children }) {
  const [whiskeys, setWhiskeys] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    async function showWhiskeys() {
      const newWhiskeys = await fetchWhiskeys();
      setWhiskeys(newWhiskeys);
      setIsLoaded(true);
    }
    showWhiskeys();
  }, []);

  // const filteredWhiskeys = whiskeys?.filter((whiskey) => {
  //   return whiskey.name.startsWith(query);
  // });

  if (!isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }
  return (
    <div class="whiskeyList">
      <List>
        {whiskeys?.map((whiskey) => (
          <ListItem key={whiskey.id}>
            <Img
              src={whiskey.img_url}
              // alt={`Picture of ${whiskey.title}`}
              alt={"Drunk up"}
            />
            <ListItemText
              title={whiskey.title}
              description={whiskey.description}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default WhiskeyList;
