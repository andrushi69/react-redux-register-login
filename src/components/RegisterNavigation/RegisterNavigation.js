import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../NavigationBar/Nav.module.scss";

const RegisterNavigation = () => {
  return (
    <nav className={classes.nav_bar}>
      <NavLink className={classes.link} to="/register">
        SingUp
      </NavLink>
      <NavLink className={classes.link} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default RegisterNavigation;