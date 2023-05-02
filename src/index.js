import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./heplers/ErrorBoundary";

const root = document.getElementById("root");

// Render the application with an ErrorBoundary component
const rootContainer = createRoot(root);
rootContainer.render(
  <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
