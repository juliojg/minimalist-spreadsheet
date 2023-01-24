import React from "react";
import "./styles/colors.css";
import './App.css';
import { SpreadSheetLayoutContainer } from "./containers/SpreadSheetLayoutContainer/SpreadSheetLayoutContainer";
import { Provider } from 'react-redux';
import { setupStore } from './store/store'


function App() {
  return (
    <Provider store={setupStore()}>
      <SpreadSheetLayoutContainer />
    </Provider>
  );
}

export default App;
