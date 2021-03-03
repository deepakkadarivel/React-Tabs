import React from "react";
import '@testing-library/jest-dom';
import { Tabs } from "../../../components/Tabs";
import { renderWithRouter } from '../../../utils';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteMatch: () => ({ url: "/", path: "/" }),
  useLocation: () => ({ search: 'tab1'}),
}));

const tabs = [
  { name: "Tab 1", key: "tab1", content: <span>ABC</span> },
  { name: "Tab 2", key: "tab2", content: <span>DEF</span> },
  { name: "Tab 3", key: "tab3", content: <span>GHI</span> }
];

it("renders <Tabs />", () => {
  const { container, getByTestId } = renderWithRouter(<Tabs content={tabs} />);
  
  // Snapshot
  expect(container).toMatchSnapshot();

  // Tab 1
  const tab1 = getByTestId('t-tab1');
  expect(tab1).toHaveClass('Tabs-Item Tabs-Item--current');
  expect(tab1.textContent).toBe('Tab 1');
  
  // Tab 2
  const tab2 = getByTestId('t-tab2');
  expect(tab2).toHaveClass('Tabs-Item');
  expect(tab2.classList).not.toContain('Tabs-Item--current');
  expect(tab2.textContent).toBe('Tab 2');
  
  // Tab 3
  const tab3 = getByTestId('t-tab3');
  expect(tab3).toHaveClass('Tabs-Item');
  expect(tab3.classList).not.toContain('Tabs-Item--current');
  expect(tab3.textContent).toBe('Tab 3');

  // Tab content
  const content = getByTestId('t-tabContent');
  expect(content.textContent).toBe('ABC');
});

it('renders <Tabs /> without crashing.', () => {
  const div = document.createElement('div');
  renderWithRouter(<Tabs />, div);
})