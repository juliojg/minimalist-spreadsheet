import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export const Header: React.FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <span className="header-title"> {t("titles.spreadsheet")} </span>
    </div>
  );
};
