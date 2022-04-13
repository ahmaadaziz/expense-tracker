import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "@mui/material/Button/";
import AddIcon from "@mui/icons-material/Add";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { AddTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    AddTransaction(newTransaction);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            mb: 3,
            mx: 0,
            px: 1,
            py: 1,
          }}
          disableElevation
          fullWidth
          endIcon={<AddIcon />}
        >
          Add transaction
        </Button>
      </form>
    </div>
  );
};
