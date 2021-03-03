import React from "react";
import { Tabs } from "../../Tabs";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteMatch: () => ({ url: "/", path: "/" })
}));

const tabs = [
  { name: "Tab 1", key: "tab1", content: <span>ABC</span> },
  { name: "Tab 2", key: "tab2", content: <span>DEF</span> },
  { name: "Tab 3", key: "tab3", content: <span>GHI</span> }
];

it("renders Tabs component", () => {
  render(<Tabs content={tabs} />);
});
