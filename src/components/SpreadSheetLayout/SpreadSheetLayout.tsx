import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { SpreadSheetMain } from "../SpreadSheetMain/SpreadSheetMain";

export const SpreadSheetLayout: React.FC<{}> = () => {
  return (
    <div className="main no-select">
      <Header />
      <SpreadSheetMain />
      <Footer />
    </div>
  );
};
