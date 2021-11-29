import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./Nav.module.scss";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/Authorize";
import {ToastContainer} from "react-toastify";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <nav className={classes.nav_bar}>
      <NavLink className={classes.link} to="/">
        Main
      </NavLink>
      {isLoggedIn && <NavLink className={classes.link} to="/contacts">
        Contacts
      </NavLink>}


    </nav>
  );
};

export default Navigation;