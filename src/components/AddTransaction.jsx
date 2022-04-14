import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "@mui/material/Button/";
import TextField from "@mui/material/TextField";
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
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Text"
            value={text}
            margin="normal"
            onChange={(e) => setText(e.target.value)}
            required
            fullWidth
            InputLabelProps={{ style: { color: "#e6e3dd" } }}
            InputProps={{ style: { color: "#e6e3dd" } }}
          ></TextField>
        </div>
        <div className="form-control">
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            label="Amount"
            margin="normal"
            helperText="negative - expense, positive - income"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            fullWidth
            InputLabelProps={{ style: { color: "#e6e3dd" } }}
            InputProps={{ style: { color: "#e6e3dd" } }}
            FormHelperTextProps={{ style: { color: "#e6e3dd" } }}
          ></TextField>
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
