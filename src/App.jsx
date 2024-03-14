import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Friend from "./Friend";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };

  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concepts Part-2</h1>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleClick2}>Click Me 2!</button>
      <button
        onClick={() => {
          alert("Button 3 Clicked");
        }}
      >
        Click Me 3!
      </button>
      <button
        onClick={() => {
          addFive(5);
        }}
      >
        Add Five
      </button>
    </>
  );
}

export default App;
