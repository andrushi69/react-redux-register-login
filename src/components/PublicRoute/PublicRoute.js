import React from 'react';
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/Authorize";
import {Navigate} from "react-router-dom";

export default function PublicRoute({restricted = false, component: Component}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isNavigated = isLoggedIn && restricted
  return (
    <>
      {isNavigated ? <Navigate to="/contacts"/> : Component}
    </>
  );
};
