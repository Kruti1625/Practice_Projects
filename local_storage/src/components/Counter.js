import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./Counter.css";

const Counter = () => {
  const { state, plusHandler } = useLocalStorage(0);

  return (
    <div className="container">
      <button onClick={plusHandler}>{state}</button>
      <div className="text">
        <p>Component rendered {state + 1} times</p>
      </div>
    </div>
  );
};
export default Counter;
