import React, {useState} from 'react';
import classes from "./Authorize.module.scss";
import {useDispatch} from "react-redux";
import {authOperations} from "../../redux/Authorize"

const Registration = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(authOperations.userRegister({name, email, password}))
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className={classes.all_register_content}>
      <div className={classes.register_backdrop}/>
      <div className={classes.registration_container}>
        <form onSubmit={handleSubmit} className={classes.search_form}>
          <input className={classes.input_field} type="text" autoComplete="off" id={"name"} name={"name"} value={name}
                 onChange={handleChange}/>
          <label htmlFor={"name"} className={classes.input_label}>Name</label>
          <input className={classes.input_field_email} type="text" autoComplete="off" id={"email"} name={"email"} value={email}
                 onChange={handleChange}/>
          <label htmlFor={"email"} className={classes.input_label_email}>Email</label>
          <input className={classes.input_field_password} type="text" autoComplete="off" id={"password"} name={"password"} value={password}
                 onChange={handleChange}/>
          <label htmlFor={"password"} className={classes.input_label_password}>Password</label>
          <button type="submit"><span>Submit</span></button>
        </form>

      </div>

    </div>
  );
};

export default Registration;