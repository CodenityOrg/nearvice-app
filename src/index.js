import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n'; // usage examples https://dev.to/wingkwong/implementing-i18next-to-your-react-application-ie1

const userConfirmation = (message, callback) => {
  console.log('User confirmation message: ', message)
  // this is the default behavior
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}

ReactDOM.render(
  <BrowserRouter
    basename={'/'}
    forceRefresh={false}
    getUserConfirmation={(message, callback) => userConfirmation(message, callback)}
    keyLength={6}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
