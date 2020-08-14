import React from "react";
import "./App.css";
import Logo from "./assets/whiskeymaniacslogo.png";
import List from "../src/components/List";
import ListItem from "../src/components/ListItem";
import ListItemImg from "../src/components/ListItemImg";
import ListItemText from "../src/components/ListItemText";
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Whiskey Database</h1>
        <img className="app__logo" src={Logo} alt="whiskeymaniacs logo" />
        <input className="input" placeholder="Get your stuff..." />
      </header>
      <main className="main">
        <List>
          Baam
          <ListItem>
            <ListItemImg src={"Test"} alt={"Test"} />
            <ListItemText title={"Test"} description={"Test"}></ListItemText>
          </ListItem>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
