import React from 'react'
import './index.scss';
import App from './App';
import {render} from "react-dom";
import {persist, store} from "./redux/Store";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRoute from "./components/PublicRoute/PublicRoute";
import HomeView from "./views/HomeView/HomeView";
import Registration from "./views/AuthorizeView/Registration";
import Login from "./views/AuthorizeView/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ContactsView from "./views/ContactsView/ContactsView";

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);