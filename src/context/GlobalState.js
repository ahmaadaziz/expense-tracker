import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const AddTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTIONS",
      payload: transaction,
    });
  };

  const DeleteTransaction = (transaction) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        AddTransaction,
        DeleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
