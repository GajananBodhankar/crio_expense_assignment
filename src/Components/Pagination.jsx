import React, { useEffect } from "react";
import { handleDecrement, handleIncrement } from "../GlobalState/Reducer";

function Pagination({ count, setCount, maxCount }) {
  useEffect(() => {
    console.log(maxCount, count);
  });
  return (
    <div>
      <button onClick={() => handleDecrement(setCount)}>-</button>
      <p>{count / 3}</p>
      <button onClick={() => handleIncrement(setCount, maxCount)}>+</button>
    </div>
  );
}

export default Pagination;
