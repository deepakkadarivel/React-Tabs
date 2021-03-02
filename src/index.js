import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </StrictMode>,
  rootElement
);
