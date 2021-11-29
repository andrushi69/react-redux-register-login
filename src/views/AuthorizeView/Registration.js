import React, {useEffect, useState} from 'react';
import classes from "./Authorize.module.scss";
import {useDispatch} from "react-redux";
import {authOperations} from "../../redux/Authorize"
import EyeOpen from "../../components/Icons/eye.svg"
import EyeClose from "../../components/Icons/eye-blocked.svg"
import Button from '@mui/material/Button';


const Registration = () => {
  const [name, setName] = useState("")
  const [dirtyName, setDirtyName] = useState(false)
  const [nameError, setNameError] = useState("Name form can't be empty")


  const [email, setEmail] = useState("")
  const [dirtyEmail, setDirtyEmail] = useState(false)
  const [emailError, setEmailError] = useState("Email form can't be empty")

  const [dirtyPassword, setDirtyPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState("Password can't be empty")


  const [valid, setValid] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (passwordError || emailError || nameError) {
      setValid(false)
    } else {
      setValid(true)
    }

  }, [passwordError])

  const handleChangeName = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setDirtyName(true)
        break;
      default:
        return;
    }
    const validationForName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (!validationForName.test(String(e.target.value).toLowerCase())) {
      setNameError("Incorrect Name")
    } else {
      setNameError("")
    }

  }
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


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.userRegister({name, email, password}))
    setName("")
    setEmail("")
    setPassword("")
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <div className={classes.all_register_content}>
      <div className={`${classes.registration_container} animate__animated animate__fast animate__zoomIn`}>
        <form onSubmit={handleSubmit} className={classes.search_form}>
          {(dirtyName && nameError) &&
          <div className={"animate__animated animate__fast animate__fadeIn"}
               style={{color: "red", position: "absolute", top: "45px", right: "65px"}}>{nameError}</div>}
          <input className={classes.input_field} placeholder={"Andrew"} type="text" autoComplete="off" id={"name"}
                 name={"name"} value={name}
                 onChange={handleChangeName}/>
          <label htmlFor={"name"} className={classes.input_label}>Name</label>
          {(dirtyEmail && emailError) &&
          <div className={"animate__animated animate__fast animate__fadeIn"}
               style={{color: "red", position: "absolute", top: "135px", right: "65px"}}>{emailError}</div>}
          <input className={classes.input_field_email} placeholder={"example@gmail.com"} type="text" autoComplete="off"
                 id={"email"} name={"email"}
                 value={email}
                 onChange={handleChangeEmail}/>
          <label htmlFor={"email"} className={classes.input_label_email}>Email</label>
          {(dirtyPassword && passwordError) &&
          <div className={"animate__animated animate__fast animate__fadeIn"}
               style={{color: "red", position: "absolute", top: "225px", right: "65px"}}>{passwordError}</div>}
          <input className={classes.input_field_password} placeholder={"any 3-12 symbols"}
                 type={passwordShown ? "text" : "password"} autoComplete="off"
                 id={"password"}
                 name={"password"} data-sign="☺" value={password}
                 onChange={handleChangePassword}/>
          <a className={classes.show_hide_password} onClick={togglePassword}>{passwordShown ?
            <img src={EyeOpen} alt="Hide"/> : <img src={EyeClose} alt="Show"/>}</a>
          <label htmlFor={"password"} className={classes.input_label_password}>Password</label>
          <Button disabled={!valid} color={"secondary"} type="submit" variant={"contained"}>Submit</Button>
        </form>

      </div>

    </div>
  );
};

export default Registration;