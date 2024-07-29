import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for concurrent rendering
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals'; // Updated from serviceWorker

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to measure performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
