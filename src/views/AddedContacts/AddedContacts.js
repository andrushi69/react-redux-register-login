import React from 'react';
import Filter from "../../components/Search/Search";
import ContactsList from "../../components/ContactList/ContactsList";

const AddedContacts = () => {
  return (
    <div>
      <h2 className={"animate__animated animate__fast animate__zoomIn"}>Contacts</h2>
      <p className={"animate__animated animate__fast animate__fadeInUpBig"}>Find contacts by name</p>
      <Filter/>
      <ContactsList/>
    </div>
  );
};

export default AddedContacts;