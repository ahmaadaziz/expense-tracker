export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
