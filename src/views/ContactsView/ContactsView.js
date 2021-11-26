import React, {useEffect} from 'react';
import Form from "../../components/FormList/Form";
import Filter from "../../components/Search/Search";
import ContactsList from "../../components/ContactList/ContactsList";
import contactsOperations from "../../redux/Contacts/ContactsOperations";
import {useDispatch} from "react-redux";

const ContactsView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsOperations.fetchContactsItem())
  }, [dispatch])

  return (
    <div className={"main_content"}>
      <h1 className={"animate__animated animate__fast animate__zoomIn"}>Phonebook</h1>
      <Form/>
      <div>

      </div>
      <h2 className={"animate__animated animate__fast animate__zoomIn"}>Contacts</h2>
      <p className={"animate__animated animate__fast animate__fadeInUpBig"}>Find contacts by name</p>
      <Filter/>
      <ContactsList/>
    </div>
  );
};

export default ContactsView;