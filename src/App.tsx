import React from "react";
import { SpreadSheetContextProvider } from "./context/SpreadSheetContext";
import { SpreadSheetLayout } from "./components/SpreadSheetLayout/SpreadSheetLayout";
import "./styles/colors.css";
import './App.css';

function App() {
  return (
    <SpreadSheetContextProvider>
      <SpreadSheetLayout />
    </SpreadSheetContextProvider>
  );
}

export default App;
