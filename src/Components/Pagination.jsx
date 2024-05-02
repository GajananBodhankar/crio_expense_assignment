import React from "react";
import { handleDecrement, handleIncrement } from "../GlobalState/Reducer";

function Pagination({ count, setCount, maxCount }) {
  return (
    <div>
      <button onClick={() => handleIncrement(setCount)}>-</button>
      <p>{count / 3}</p>
      <button onClick={() => handleDecrement(setCount, maxCount)}>+</button>
    </div>
  );
}

export default Pagination;
