import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineEdit } from "react-icons/md";
import { handleDelete, handleEdit } from "../GlobalState/Reducer";
function Recent({
  totalElementsList,
  count,
  state,
  dispatch,
  setBalance,
  balance,
  setExpense,
  expense,
}) {
  return totalElementsList.map(
    (ele, ind) =>
      ind < count &&
      ind > count - 4 * 1 && (
        <div key={`Element ${ind}`}>
          <p>{ele.title}</p>
          <p>{ele.price}</p>
          <RxCrossCircled
            onClick={() =>
              handleDelete(
                ele,
                state,
                dispatch,
                setBalance,
                balance,
                setExpense,
                expense
              )
            }
          />
          <MdOutlineEdit
            onClick={() => {
              handleEdit();
            }}
          />
        </div>
      )
  );
}

export default Recent;
