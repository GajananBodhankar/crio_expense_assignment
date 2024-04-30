import React, { useState } from "react";
import "../styles/expense.css";
import CustomModel from "./Model.jsx";
function Expense() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mainExpenseContainer">
      <div className="subContainerOne">
        <h1>Expense Tracker</h1>
        <div className="subOneWrapper">
          <div className="balanceContainer">
            <p>Wallet Balance: $0000</p>
            <button>+ Add Income</button>
          </div>
          <div className="expenseContainer">
            <p>Expenses: $4500</p>
            <button>+ Add Expense</button>
          </div>
          <div className="pieChartContainer"></div>
        </div>
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)}>Click</button>
      <div className="subContainerTwo"></div>
      <CustomModel  isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

export default Expense;
