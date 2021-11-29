import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authOperations, authSelectors} from '../../redux/Authorize';
import classes from "./UserView.module.scss";
import Button from "@mui/material/Button";

const UserLoggedIn = () => {

  const dispatch = useDispatch()
  const userName = useSelector(authSelectors.getUsername)
  return (
    <div className={classes.user_container}>
      <span className={"animate__animated  animate__zoomIn"}>YOU ARE WELCOME</span>
      <span className={"animate__animated  animate__zoomIn"}>{userName.toUpperCase()}</span>
      <Button className={"animate__animated  animate__zoomIn"} onClick={() => dispatch(authOperations.userLogOut())}>Log
        Out</Button>
    </div>
  );
};

export default UserLoggedIn;