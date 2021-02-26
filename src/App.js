import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const title = "react-i18next-translations";

  const { t } = useTranslation();

  const changeLanguage = (code) => (e) => {
    localStorage.setItem("language", code);
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="toolbar" role="banner">
        <img width="40" alt="React Logo" src={logo} />
        <span>{t("main.header.welcome")}</span>
      </div>

      <div className="content" role="main">
        <div className="card highlight-card card-small">
          <span>{t("main.page.title", { title })}</span>
        </div>

        <h2>{t("main.page.section.languages.title")}</h2>
        <p>{t("main.page.section.languages.subtitle")}</p>

        <div className="card-container">
          <div onClick={changeLanguage("en")} className="card card-small">
            <span>{t("main.page.section.languages.english")}</span>
          </div>

          <div onClick={changeLanguage("es")} className="card card-small">
            <span>{t("main.page.section.languages.spanish")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
