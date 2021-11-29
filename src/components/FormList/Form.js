import React, {useEffect, useState} from "react";
import styles from "./Form.module.scss"
import shortid from "shortid"
import {useDispatch, useSelector} from "react-redux";
import contactsOperations from "../../redux/Contacts/ContactsOperations"
import * as contactsSelectors from "../../redux/Contacts/ContactsSelectors";
import Button from "@mui/material/Button";


export default function Form() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [dirtyName, setDirtyName] = useState(false)
  const [dirtyNumber, setDirtyNumber] = useState(false)
  const [nameError, setNameError] = useState("Name couldn't be empty")
  const [numberError, setNumberError] = useState("Number couldn't be empty")

  const [valid, setValid] = useState(false)

  const uniqueId = shortid.generate()
  const uniqueIdSecond = shortid.generate()

  const contacts = useSelector(contactsSelectors.setContacts);

  const dispatch = useDispatch();
  const onAddContactItem = (name, number) => dispatch(contactsOperations.addContactItem(name, number));

  useEffect(()=>{
    if (nameError || numberError){
      setValid(false)
    }
    else {
      setValid(true)
    }

  },[nameError, numberError])


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
  const handleChangeNumber = (e) => {
    const {name, value} = e.target;
    switch (name) {
      case 'number':
        setNumber(value);
        setDirtyNumber(true)
        break;

      default:
        return;
    }
    const validationForNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    if (!validationForNumber.test(String(e.target.value).toLowerCase())) {
      setNumberError("Incorrect Number")
    } else {
      setNumberError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      onAddContactItem(name, number)
    }
    reset()
  }
  const reset = () => {
    setName("")
    setNumber("")
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={`${styles.form_label} animate__animated animate__fast animate__zoomIn`} htmlFor={uniqueId}>
        Name
        {(dirtyName && nameError) && <div style={{color: "red", position: "absolute", right: "0"}}>{nameError}</div>}
        <input className={`${styles.form_input} animate__animated animate__fast animate__zoomIn`} type="text"
               name="name"
               id={uniqueId}
               autoComplete={"off"}
               value={name}
               onChange={handleChangeName}
               placeholder={"Johnny Depp"}
        />
      </label>
      <label className={`${styles.form_label} animate__animated animate__fast animate__zoomIn`}
             htmlFor={uniqueIdSecond}>
        Phone
        {(dirtyNumber && numberError) &&
        <div style={{color: "red", position: "absolute", right: "0"}}>{numberError}</div>}
        <input className={`${styles.form_input} animate__animated animate__fast animate__zoomIn`} type="tel"
               name="number"
               autoComplete={"off"}
               id={uniqueIdSecond}
               value={number}
               onChange={handleChangeNumber}
               placeholder={"123-456-7890"}
        />
      </label>
      <Button disabled={!valid} className={`${styles.form_button} animate__animated animate__fast animate__zoomIn`}
              color={"secondary"} type="submit" variant={"contained"}>Add
        Contact</Button>
    </form>

  )
}
