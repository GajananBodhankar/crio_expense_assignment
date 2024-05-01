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
  useEffect(() => {
    handleGetLocalStorage(setExpense, setBalance, balance, dispatch);
  }, []);

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
        </div>
        <div className="topExpenses"></div>
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
