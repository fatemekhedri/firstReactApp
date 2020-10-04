import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Domain from "../src/domain";
import Flower from "./flower";
import { Fruit } from "./fruit";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Domain name="maryam" />
      <Flower flowerName="zanbagh" />
      {Fruit("apple")}
    </div>
  );
}

export default App;
