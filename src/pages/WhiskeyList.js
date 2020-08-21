import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import ListItemLink from "../components/ListItem";
import Image from "../components/Img";
import ListItemText from "../components/ListItemText";
import fetchWhiskeys from "../api/whiskeys";
import LoadingScreen from "../components/LoadingScreen";
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

  const WhiskeyListing = styled.div`
    background: rgba(255, 255, 255, 0.7);
  `;

  if (!isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }
  return (
    <WhiskeyListing>
      <List>
        {filteredWhiskeys?.map((whiskey) => (
          <ListItemLink key={whiskey.title}>
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
          </ListItemLink>
        ))}
      </List>
    </WhiskeyListing>
  );
}
export default WhiskeyList;
