import React from "react";
import { TableContainer } from "../../containers/TableContainer/TableContainer";
import "./SpreadSheetMain.css";

export const SpreadSheetMain: React.FC<{}> = () => {
  return (
    <div className="main-container">
      <TableContainer />
    </div>
  );
};
