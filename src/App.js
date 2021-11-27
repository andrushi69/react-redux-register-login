import Navigation from "./components/NavigationBar/Navigation";
import RegisterNavigation from "./components/RegisterNavigation/RegisterNavigation";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authOperations, authSelectors} from "./redux/Authorize";
import UserLoggedIn from "./views/UserView/UserLoggedIn";
import {Route, Routes} from "react-router-dom";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import HomeView from "./views/HomeView/HomeView";
import Registration from "./views/AuthorizeView/Registration";
import Login from "./views/AuthorizeView/Login";
import ContactsView from "./views/ContactsView/ContactsView";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loader from "react-loader-spinner";
import styles from "./components/Search/Search.module.scss";

const App = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isFetchingCurrUser = useSelector(authSelectors.getFetchCurrUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    isFetchingCurrUser ?
      <Loader className={"loading"} type="Oval" color="#ADFF2FFF" height={170} width={170} timeout={3000}/>
      : <div>
        <div className={"navigation"}>
          <Navigation/>
          {isLoggedIn ? <UserLoggedIn/> : <RegisterNavigation/>}
        </div>
        <Routes>
          <Route path="/" element={<PublicRoute exact component={<HomeView/>}/>}/>
          <Route path="/register" element={<PublicRoute restricted component={<Registration/>}/>}/>
          <Route path="/login" element={<PublicRoute restricted component={<Login/>}/>}/>
          <Route path="/contacts" element={<PrivateRoute component={<ContactsView/>}/>}/>
        </Routes>
      </div>
  )
}


export default App