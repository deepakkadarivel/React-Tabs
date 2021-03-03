
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

const leftClick = { button: 0 }
const  click =(ui)=> userEvent.click(ui, leftClick)

export { renderWithRouter, click };