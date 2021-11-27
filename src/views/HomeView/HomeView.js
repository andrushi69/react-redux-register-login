import React from 'react';
import classes from "./HomeView.module.scss";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/Authorize";
import "animate.css"

const HomeView = () => {
  const userName = useSelector(authSelectors.getUsername)


  return (
    <div className={classes.home_content}>
      {userName ? <h1 className={"animate__animated animate__fast animate__zoomIn"}>HELLO {userName} !</h1> :
        <h1 className={"animate__animated animate__fast animate__zoomIn"}>HELLO FRIEND</h1>}
      {userName ?
        <h2 className={"animate__animated animate__fast animate__zoomIn"}>ADD CONTACTS TO YOUR
          PHONEBOOK !</h2> :
        <h2 className={"animate__animated animate__fast animate__zoomIn"}>SING UP, AND ADD CONTACTS
          FOR YOUR PHONEBOOK !</h2>}
    </div>
  );
};

export default HomeView;