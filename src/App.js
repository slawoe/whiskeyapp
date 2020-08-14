import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/whiskeymaniacslogo.png";
import WhiskeyList from "./components/WhiskeyList";
import fetchWhiskeys from "./api/whiskeys";
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Whiskey Database</h1>
        <img className="app__logo" src={Logo} alt="whiskeymaniacs logo" />
        <input className="input" placeholder="Get your stuff..." />
      </header>
      <main className="main">
        <WhiskeyList />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
