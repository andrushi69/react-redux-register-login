import React, {useEffect, useState} from 'react';
import classes from "./Authorize.module.scss";
import {authOperations, authSelectors} from "../../redux/Authorize";
import {useDispatch} from "react-redux";
import EyeOpen from "../../components/Icons/eye.svg";
import EyeClose from "../../components/Icons/eye-blocked.svg";
import Button from "@mui/material/Button";
import {ToastContainer} from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("")
  const [dirtyEmail, setDirtyEmail] = useState(false)
  const [emailError, setEmailError] = useState("Email form can't be empty")
  const [dirtyPassword, setDirtyPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState("Password can't be empty")
  const dispatch = useDispatch()
  const [valid, setValid] = useState(false)


  useEffect(() => {
    if (passwordError || emailError) {
      setValid(false)
    } else {
      setValid(true)
    }

  }, [passwordError])

  const handleChangeEmail = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setDirtyEmail(true)
        break;
      default:
        return;
    }
    const validationForEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!validationForEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError("Not required symbols for email")
    } else {
      setEmailError("")
    }
  }
  const handleChangePassword = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'password':
        setPassword(value);
        setDirtyPassword(true)
        break;
      default:
        return;
    }
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setPasswordError("Required 3 - 12 symbols")
    } else {
      setPasswordError("")
    }
  }
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.userLogIn({email, password}))
    setEmail("")
    setPassword("")
  }
  return (
    <div className={classes.all_register_content}>
      <div className={`${classes.registration_container} animate__animated animate__fast animate__zoomIn`}>
        <form onSubmit={handleSubmit} className={classes.search_form}>
          {(dirtyEmail && emailError) &&
          <div className={"animate__animated animate__fast animate__fadeIn"}
               style={{color: "red", position: "absolute", top: "45px", right: "65px"}}>{emailError}</div>}
          <input className={classes.input_field_email_login} placeholder={"example@gmail.com"} type="text"
                 autoComplete="off" id={"email"} name={"email"}
                 value={email}
                 onChange={handleChangeEmail}/>
          <label htmlFor={"email"} className={classes.input_label_email_login}>Email</label>
          {(dirtyPassword && passwordError) &&
          <div className={"animate__animated animate__fast animate__fadeIn"}
               style={{color: "red", position: "absolute", top: "135px", right: "65px"}}>{passwordError}</div>}
          <input className={classes.input_field_password_login} placeholder={"any 3-12 symbols"}
                 type={passwordShown ? "text" : "password"}
                 autoComplete="off" id={"password"}
                 name={"password"} data-sign="☺" value={password}
                 onChange={handleChangePassword}/>
          <a className={classes.show_hide_password_login} onClick={togglePassword}>{passwordShown ?
            <img src={EyeOpen} alt="Hide"/> : <img src={EyeClose} alt="Show"/>}</a>
          <label htmlFor={"password"} className={classes.input_label_password_login}>Password</label>
          <Button disabled={!valid} color={"secondary"} type="submit" variant={"contained"}>Submit</Button>
        </form>
      </div>

    </div>
  );
};

export default Login;