import React from "react";
import "../styles/expense.css";
function Expense() {
  return (
    <div className="mainExpenseContainer">
      <div className="subContainerOne">
        <h1>Expense Tracker</h1>
        <div className="subOneWrapper">
          <div className="balanceContainer">
            <p>Wallet Balance:</p>
          </div>
          <div className="expenseContainer"></div>
          <div className="pieChartContainer"></div>
        </div>
      </div>
      <div className="subContainerTwo"></div>
    </div>
  );
}

export default Expense;
