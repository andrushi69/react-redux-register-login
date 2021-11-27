import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/Authorize";

export default function PrivateRoute({component: Component}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <>
      {isLoggedIn ? Component : <Navigate to="/"/>}
    </>
  );
};
