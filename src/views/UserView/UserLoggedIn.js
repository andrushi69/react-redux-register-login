import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authSelectors} from '../../redux/Authorize';
import {authOperations} from '../../redux/Authorize';
import classes from "./UserView.module.scss";

const UserLoggedIn = () => {

  const dispatch = useDispatch()
  const userName = useSelector(authSelectors.getUsername)
  return (
    <div className={classes.user_container}>
      <span>YOU ARE WELCOME</span>
      <span>{userName.toUpperCase()}</span>
      <button onClick={()=> dispatch(authOperations.userLogOut())}>Log Out</button>
    </div>
  );
};

export default UserLoggedIn;