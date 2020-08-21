import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WhiskeyList from "./pages/WhiskeyList";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import Main from "./components/Main";
import GlobalStyles from "./GlobalStyles";
import AddForm from "./pages/AddWhiskey";
import MyWhiskeys from "./pages/MyWhiskeys";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <GlobalStyles />
      <Router>
        <MainHeader
          whiskeyQuery={query}
          onWhiskeyQueryChange={(whiskeyQuery) => setQuery(whiskeyQuery)}
        />
        <Main>
          <Switch>
            <Route path="/add">
              <AddForm />
            </Route>
            <Route path="/my">
              <MyWhiskeys></MyWhiskeys>
            </Route>
            <Route path="/">
              <WhiskeyList query={query}></WhiskeyList>
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
