import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Logo from "./assets/whiskeymaniacslogo.png";
import WhiskeyList from "./components/WhiskeyList";
import MainHeader from "./components/MainHeader";
import CollapsingCard from "./components/CollapsingCard";
import Footer from "./components/Footer";
import fetchWhiskeys from "./api/whiskeys";
import Main from "./components/Main";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <MainHeader
        whiskeyQuery={query}
        onWhiskeyQueryChange={(whiskeyQuery) => setQuery(whiskeyQuery)}
      />
      <Main>
        <WhiskeyList query={query}></WhiskeyList>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
