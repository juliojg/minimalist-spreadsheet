import React from "react";
import { Header } from "../../components/Header/Header";
import { SpreadSheetMain } from "../../components/SpreadSheetMain/SpreadSheetMain";
import { FooterContainer } from "../FooterContainer/FooterContainer";

export const SpreadSheetLayoutContainer: React.FC<{}> = () => {
  return (
    <div className="main no-select">
      <Header />
      <SpreadSheetMain />
      <FooterContainer />
    </div>
  );
};
