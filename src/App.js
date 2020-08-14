import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/whiskeymaniacslogo.png";
import WhiskeyList from "./components/WhiskeyList";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="app">
      <header className="header">
        <MainHeader />
      </header>
      <main className="main">
        <WhiskeyList />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
