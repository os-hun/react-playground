import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CounterProvider } from './contexts';
import reportWebVitals from './reportWebVitals';

const INITIAL_COUNT = 2;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterProvider initialCount={INITIAL_COUNT}>
        <App />
      </CounterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
