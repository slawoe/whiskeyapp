import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./assets/whiskeymaniacslogo.png";
import WhiskeyList from "./components/WhiskeyList";
import MainHeader from "./components/MainHeader";
import CollapsingCard from "./components/CollapsingCard";
import Footer from "./components/Footer";
import fetchWhiskeys from "./api/whiskeys";

function App() {
  // const [query, setQuery] = useState("");

  return (
    <div className="app">
      <header className="header">
        <MainHeader />
        {/* <div className="firstRowHeader">
          <img className="mainLogo" src={Logo} art="Logo" />
          <span>Whiskey Database</span>
        </div>
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          className="input"
          placeholder="Get Whiskey bro..."
        ></input> */}
      </header>
      <main className="main">
        <WhiskeyList></WhiskeyList>
        {/* <CollapsingCard></CollapsingCard> */}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
