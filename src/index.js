import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";
const ErrorPage = lazy(() => import("./components/Error/Error"));

const root = document.getElementById("root");

const rootContainer = createRoot(root);
rootContainer.render(
  <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => {}}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
