import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <p>Hello there</p>
      <p>
        <button onClick={clickAlert}>Click me</button>
      </p>
    </>
  );
}
function clickAlert() {
  alert("You clicked me!");
}

export default App;
