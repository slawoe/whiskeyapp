import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhiskeyList from "./components/WhiskeyList";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <GlobalStyles />
      <MainHeader
        whiskeyQuery={query}
        onWhiskeyQueryChange={(whiskeyQuery) => setQuery(whiskeyQuery)}
      />
      <Main>
        <WhiskeyList query={query}></WhiskeyList>
      </Main>
      <Footer />
    </>
  );
}

export default App;
