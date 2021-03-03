import { StrictMode, Suspense } from "react";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./i18n";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router history={createBrowserHistory()}>
      <Suspense fallback="loading">
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </StrictMode>,
  rootElement
);
