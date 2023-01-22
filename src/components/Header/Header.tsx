import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export const Header: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <div className="header-title"> {t("titles.spreadsheet")} </div>
      <div className="instructions">{t("instructions")} </div>
    </div>
  );
};
