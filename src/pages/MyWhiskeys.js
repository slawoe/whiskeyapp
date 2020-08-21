import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import LoadingScreen from "../components/LoadingScreen";
import List from "../components/List";
import ListItemLink from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import Img from "../components/Img";
import Tumbler from "../assets/tumbler.svg";
import DeleteButton from "../components/DeleteButton";

const fetchMyWhiskey = async () => {
  const response = await fetch("http://localhost:3000/mywhiskies");
  return response.json();
};

const MyWhiskeyContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
`;
function Title() {
  const { data, status } = useQuery("MyWhiskey", fetchMyWhiskey);

  return (
    <MyWhiskeyContainer>
      {status === "loading" && <LoadingScreen />}
      {status === "error" && (
        <div>Fuck JavaScript. Something went wrong again!</div>
      )}
      {status === "success" && (
        <List>
          {data.map((whiskey) => (
            <ListItemLink key={whiskey.id}>
              <Img
                src={Tumbler}
                // alt={`Picture of ${whiskey.title}`}
                alt={""}
              />
              <ListItemText
                title={whiskey.title}
                price={`Price: ${whiskey.price},- $`}
                region={`Region: ${whiskey.region}`}
                rating={`Rating: ${whiskey.rating} of 100`}
                author={`Author: ${whiskey.author}`}
              />
              <DeleteButton />
            </ListItemLink>
          ))}
        </List>
      )}
    </MyWhiskeyContainer>
  );
}

export default Title;
