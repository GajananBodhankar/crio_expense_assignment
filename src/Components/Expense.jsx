import React, { useEffect, useMemo, useReducer, useState } from "react";
import "../styles/expense.css";
import CustomModel from "./Model.jsx";
import { useSnackbar } from "notistack";
import {
  handleGetLocalStorage,
  initialState,
  reducerFunction,
} from "../GlobalState/Reducer.js";
import PieChartComponent from "./PieChart.jsx";
import BalanceModel from "./BalanceModel.jsx";
function Expense({
  state,
  dispatch,
  isOpen,
  setIsOpen,
  balance,
  setBalance,
  setExpense,
  expense,
}) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isBalanceModelOpen, setBalanceModel] = useState(false);
  const [chartData, setChartData] = useState([
    {
      name: "Food",
      value: state.food.length
        ? state.food.reduce((acc, ele) => (acc += +ele.price), 0)
        : 0,
    },
    {
      name: "Entertainment",
      value: state.entertainment.length
        ? state.entertainment.reduce((acc, ele) => (acc += +ele.price), 0)
        : 0,
    },
    {
      name: "Travel",
      value: state.travel.length
        ? state.travel.reduce((acc, ele) => (acc += +ele.price), 0)
        : 0,
    },
  ]);
  useEffect(() => {
    handleGetLocalStorage(setExpense, setBalance, balance, dispatch);
  }, []);
  useEffect(() => {
    setChartData([
      {
        name: "Food",
        value: state.food.length
          ? state.food.reduce((acc, ele) => (acc += +ele.price), 0)
          : 0,
      },
      {
        name: "Entertainment",
        value: state.entertainment.length
          ? state.entertainment.reduce((acc, ele) => (acc += +ele.price), 0)
          : 0,
      },
      {
        name: "Travel",
        value: state.travel.length
          ? state.travel.reduce((acc, ele) => (acc += +ele.price), 0)
          : 0,
      },
    ]);
    setChartData((prev) => prev.sort((a, b) => b.value - a.value));
  }, [state]);
  return (
    <div className="mainExpenseContainer">
      <div className="subContainerOne">
        <h1>Expense Tracker</h1>
        <div className="subOneWrapper">
          <div className="balanceContainer">
            <p>Wallet Balance: ₹{balance}</p>
            <button onClick={() => setBalanceModel((prev) => !prev)}>
              + Add Income
            </button>
          </div>
          <div className="expenseContainer">
            <p>Expenses: ₹{expense}</p>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              + Add Expense
            </button>
          </div>
          <div className="pieChartContainer">
            <PieChartComponent
              state={
                JSON.parse(localStorage.getItem("data"))
                  ? JSON.parse(localStorage.getItem("data"))
                  : state
              }
            />
            <div className="pieIndexInfo">
              <div>
                <div className="food"></div>
                <p>Food</p>
              </div>
              <div>
                <div className="travel"></div>
                <p>Travel</p>
              </div>
              <div>
                <div className="entertainment"></div>
                <p>Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subContainerTwo">
        <div className="recentTransactions">
          <h1>Recent Transactions</h1>
          <div className="SubRecentTransactions">
            {Object.values(state).map((i) => {
              if (i.length > 0) {
                return i.map((ele, ind) => (
                  <p key={`Element ${ind}`}>{ele.title}</p>
                ));
              }
              return null;
            })}
          </div>
        </div>
        <div className="topExpenses">
          <h1>Top Expenses</h1>
          <div className="subTopExpenses">
            {chartData.map((i, j) => (
              <div>
                <p key={j}>{i.name}</p>
                <div>
                  <div
                    className="topExpensesChartDiv"
                    style={{
                      width: `${
                        (i.value /
                          Math.max(
                            chartData[0].value,
                            chartData[1].value,
                            chartData[2].value
                          )) *
                        100
                      }%`,
                    }}
                  >
                    .
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CustomModel isOpen={isOpen} setIsOpen={setIsOpen} />
      <BalanceModel
        isOpen={isBalanceModelOpen}
        setIsOpen={setBalanceModel}
        balance={balance}
        setBalance={setBalance}
      />
    </div>
  );
}

export default Expense;
