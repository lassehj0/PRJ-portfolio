import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <p>Hello there</p>
      <p>
        <button onClick={sayHello}>Click me</button>
      </p>
    </>
  );
}
function sayHello() {
  alert("You clicked me!");
}

export default App;
