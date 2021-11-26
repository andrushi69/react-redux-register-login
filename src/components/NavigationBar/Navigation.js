import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Nav.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.nav_bar}>
      <NavLink className={classes.link} to="/">
        Main
      </NavLink>
      <NavLink className={classes.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;