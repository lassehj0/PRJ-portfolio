import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <p>Hello there i have big cock</p>
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
