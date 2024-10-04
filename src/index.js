import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import store from './store'
import "./assets/scss/main.scss";
import { store } from "./redux/store.js";


ReactDOM.render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
    {/*Provider acts as a gateway or supervisor, granting access to the Redux store to any component that needs it */}
    <Provider store={store}>
    {/*BrowserRouter enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);