import React from "react";
import "./Counter.scss";

const Counter = ({ count, minNum, addNum }) => {
  return (
    <>
      <div className="container">
        <p className="counter">this number is : {count}</p>
        <button onClick={addNum}>+</button>
        <button onClick={minNum}>-</button>
      </div>
    </>
  );
};

export default Counter;
