import React, { useContext, useEffect } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { SpreadSheetMain } from "../SpreadSheetMain/SpreadSheetMain";

export const SpreadSheetLayout: React.FC<{}> = () => {
  const [state, dispatch] = useContext(SpreadSheetContext);

  useEffect(() => {
    dispatch({
      type: "initializeTable",
      payload: { maxRows: state?.maxRows, maxColumns: state?.maxColumns }
    });
  }, [dispatch, state.maxRows, state.maxColumns]);

  return (
    <div className="main no-select">
      <Header />
      <SpreadSheetMain />
      <Footer />
    </div>
  );
};
