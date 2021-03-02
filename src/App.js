import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "./components/Tabs";
import "./styles.css";

export default function App() {
  const { t } = useTranslation();

  const tabs = [
    { name: t("tab1"), key: "tab1", content: <span>ABC</span> },
    { name: t("tab2"), key: "tab2", content: <span>DEF</span> },
    { name: t("tab3"), key: "tab3", content: <span>GHI</span> }
  ];
  return (
    <div className="App">
      <Tabs content={tabs} />
    </div>
  );
}
