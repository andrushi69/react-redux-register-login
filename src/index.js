import React from 'react';
import './index.scss';
import App from './App';
import * as ReactDOM from "react-dom";
import {persist, store} from "./redux/Store";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeView from "./views/HomeView/HomeView";
import Registration from "./views/AuthorizeView/Registration";
import Login from "./views/AuthorizeView/Login";
import ContactsView from "./views/ContactsView/ContactsView";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <App/>
          <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contacts" element={<ContactsView/>}/>
          </Routes>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);