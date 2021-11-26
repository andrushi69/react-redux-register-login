import Navigation from "./components/NavigationBar/Navigation";
import RegisterNavigation from "./components/RegisterNavigation/RegisterNavigation";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authOperations, authSelectors} from "./redux/Authorize";
import UserLoggedIn from "./views/UserView/UserLoggedIn";

const App = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <div>
      <div className={"navigation"}>
        <Navigation/>
        {isLoggedIn ? <UserLoggedIn/> : <RegisterNavigation/>}
      </div>
    </div>
  )
}


export default App