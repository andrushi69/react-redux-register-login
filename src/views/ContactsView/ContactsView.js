import React, {useEffect} from 'react';
import Form from "../../components/FormList/Form";
import contactsOperations from "../../redux/Contacts/ContactsOperations";
import {useDispatch} from "react-redux";
import AddedContacts from "../AddedContacts/AddedContacts";

const ContactsView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsOperations.fetchContactsItem())
  }, [dispatch])

  return (
    <div className={"main_content"}>
      <h1 className={"animate__animated animate__fast animate__zoomIn"}>Phonebook</h1>
      <Form/>
      <AddedContacts/>
    </div>
  );
};

export default ContactsView;