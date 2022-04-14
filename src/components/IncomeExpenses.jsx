import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, number) => acc + number, 0)
    .toFixed(2);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, number) => acc + number, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      {/* <div>
        <Card></Card>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{Math.abs(expense)}</p>
      </div> */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "#e6e3dd" }}
          />
        }
      >
        <Paper
          elevation={12}
          sx={{
            color: "#e6e3dd",
            bgcolor: "#1a1a1a",
            width: "75%",
            height: "100%",
            borderRadius: "15%",
            pb: 2,
            pt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Income</h4>
          <p className="plus">{income}</p>
        </Paper>
        <Paper
          elevation={12}
          sx={{
            color: "#e6e3dd",
            bgcolor: "#1a1a1a",
            width: "75%",
            height: "100%",
            borderRadius: "15%",
            pb: 2,
            pt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Expenses
          <p className="minus">{Math.abs(expense)}</p>
        </Paper>
      </Stack>
    </div>
  );
};
