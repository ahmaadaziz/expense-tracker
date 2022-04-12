import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const totalAmount = transactions
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        {totalAmount < 0 ? "-" : ""}${Math.abs(totalAmount)}
      </h1>
    </div>
  );
};
