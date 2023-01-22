import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

type FooterProps = {
  currentCell: string;
  currentCellSentence: string;
  currentCellValue: string;
};

export const Footer: React.FC<FooterProps> = ({
  currentCell,
  currentCellSentence,
  currentCellValue
}) => {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <div className="current-cell-text">
        {t("footer.current-cell")}: {currentCell ? currentCell : "-"}
      </div>
      <div className="current-cell-text">
        {t("footer.current-cell-sentence")}:
        {currentCellSentence ? currentCellSentence : "-"}
      </div>
      <div
        className={
          currentCellValue.toString().includes("!ERROR")
            ? "current-cell-text-error"
            : "current-cell-text"
        }
      >
        {t("footer.current-cell-value")}:
        {currentCellValue ? currentCellValue : "-"}
      </div>
    </div>
  );
};
