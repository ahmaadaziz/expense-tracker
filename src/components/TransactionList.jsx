import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "#e6e3dd",
          },
        }}
      >
        <Chip label="TRANSACTIONS" />
      </Divider>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
