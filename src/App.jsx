import React from "react";
import Expense from "./Components/Expense";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import "./App.css";
function App() {
  return (
    <SnackbarProvider>
      <Expense />
    </SnackbarProvider>
  );
}

export default App;
