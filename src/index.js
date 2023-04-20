
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './heplers/ErrorBoundary';

// Render the application with an ErrorBoundary component
ReactDOM.render(
  <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
