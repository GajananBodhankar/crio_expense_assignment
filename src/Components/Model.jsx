import React, { useReducer, useState } from "react";
import Model from "react-modal";
import "../styles/model.css";
import { useSnackbar } from "notistack";
import {
  addExpense,
  initialState,
  reducerFunction,
} from "../GlobalState/Reducer";
function CustomModel({ isOpen, setIsOpen }) {
  const { enqueueSnackbar } = useSnackbar();
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [data, setData] = useState({
    title: "",
    price: "",
    category: "DEFAULT",
    date: "",
  });
  return (
    <Model
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: "#EFEFEFD9",
          height: "max-content",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "max-content",
        },
      }}
    >
      <div className="modelContainer">
        <h1>Add Expenses</h1>
        <div className="inputContainerOne">
          <input
            type="text"
            value={data.title}
            placeholder="Title"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type="text"
            value={data.price}
            placeholder="Price"
            onChange={(e) =>
              setData((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>
        <div className="inputContainerTwo">
          <select
            name=""
            id=""
            value={data.category}
            onChange={(e) =>
              setData((prev) => ({ ...prev, category: e.target.value }))
            }
          >
            <option value="DEFAULT">
              Select Category
            </option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <input
            type="date"
            value={data.date}
            onChange={(e) =>
              setData((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div className="buttonContainer">
          <button
            onClick={() =>
              addExpense(data.category, data, dispatch, state, enqueueSnackbar)
            }
          >
            Add Expense
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>Cancel</button>
        </div>
      </div>
    </Model>
  );
}

export default CustomModel;
