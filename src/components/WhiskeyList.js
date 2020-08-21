import React, { useState, useEffect } from "react";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Img";
import ListItemText from "./ListItemText";
import fetchWhiskeys from "../api/whiskeys";
import LoadingScreen from "./LoadingScreen";
import "./WhiskeyList.css";
import Tumbler from "../assets/tumbler.svg";

function WhiskeyList({ query }) {
  const [whiskeys, setWhiskeys] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);

  useEffect(() => {
    async function showWhiskeys() {
      const newWhiskeys = await fetchWhiskeys(query);
      setWhiskeys(newWhiskeys);
      setIsLoaded(true);
    }
    showWhiskeys();
  }, [query]);

  const filteredWhiskeys = whiskeys?.filter((getWhiskey) => {
    return getWhiskey.title.startsWith(query);
  });

  if (!isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }
  return (
    <div className="whiskeyList">
      <List>
        {filteredWhiskeys?.map((whiskey) => (
          <ListItem key={whiskey.title}>
            <Image
              src={Tumbler}
              // alt={`Picture of ${whiskey.title}`}
              alt={""}
            />
            <ListItemText
              title={whiskey.title}
              price={`Price: ${whiskey.price},- $`}
              region={`Region: ${whiskey.region}`}
              rating={`Rating: ${whiskey.rating} of 100`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default WhiskeyList;
