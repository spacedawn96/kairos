import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

export function isBackgroundPage(): boolean {
  return window.innerHeight === 0 && window.innerWidth === 0;
}

// When this script is being loaded in the context of a web extension background
// page, we don't need to render the app UI so we use dynamic imports to prevent
// unnecessary loading & initialization UI-related modules (React, stylesheets,
// UI assets etc.)
if (isBackgroundPage()) {
  console.log('[INFO] Script is loaded as a background page');
  import('./background/index');
} else {
  console.log('[INFO] Script is not loaded as a background page');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
