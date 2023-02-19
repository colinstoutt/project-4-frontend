import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
