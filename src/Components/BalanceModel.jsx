import React from "react";
import { useEffect, useReducer, useState } from "react";
import Model from "react-modal";
import '../styles/balanceModel.css'
function BalanceModel({ isOpen, setIsOpen }) {
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

        <div className="balanceModelContainer">
            <h1>Add Balance</h1>
            <div className="balanceModelWrapper">
                <input type="text" />
                <button>Add Balance</button>
                <button>Cancel</button>
            </div>
        </div>
    </Model>
  );
}

export default BalanceModel;
