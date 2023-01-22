import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

type FooterProps = {
  currentCell: string;
  currentCellSentence: string;
}


export const Footer: React.FC<FooterProps> = ({ currentCell, currentCellSentence }) => {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <div className="current-cell-text"> {t("footer.current-cell")}: {currentCell ? currentCell : '-'} </div>
      <div className="current-cell-text"> {t("footer.current-cell-sentence")} : {currentCellSentence ? currentCellSentence : '-'} </div>
    </div>
  );
};
