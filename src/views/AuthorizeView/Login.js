import React, {useState} from 'react';
import classes from "./Authorize.module.scss";
import {authOperations} from "../../redux/Authorize";
import {useDispatch} from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.userLogIn({email, password}))
    setEmail("")
    setPassword("")
  }
  return (
    <div className={classes.all_register_content}>
      <div className={classes.register_backdrop}/>
      <div className={classes.registration_container}>
        <form onSubmit={handleSubmit} className={classes.search_form}>
          <input className={classes.input_field_email_login} type="text" autoComplete="off" id={"email"} name={"email"}
                 value={email}
                 onChange={handleChange}/>
          <label htmlFor={"email"} className={classes.input_label_email_login}>Email</label>
          <input className={classes.input_field_password_login} type="text" autoComplete="off" id={"password"}
                 name={"password"} value={password}
                 onChange={handleChange}/>
          <label htmlFor={"password"} className={classes.input_label_password_login}>Password</label>

          <button type="submit"><span>Submit</span></button>
        </form>
      </div>

    </div>
  );
};

export default Login;