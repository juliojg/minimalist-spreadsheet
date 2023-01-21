import React from "react";
import { SpreadSheetContextProvider } from "./context/SpreadSheetContext";
import "./styles/colors.css";
import './App.css';
import { SpreadSheetLayoutContainer } from "./containers/SpreadSheetLayoutContainer/SpreadSheetLayoutContainer";

function App() {
  return (
    <SpreadSheetContextProvider>
      <SpreadSheetLayoutContainer />
    </SpreadSheetContextProvider>
  );
}

export default App;
