import {createSelector} from "@reduxjs/toolkit";

export const setLoading = state => state.contacts.loading;
export const setFilter = state => state.contacts.changeFilter;
export const setContacts = state => state.contacts.contactsReducer;
export const filteredItems = createSelector(
  [setContacts, setFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredItems = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return {
      contacts: filteredItems
    }
  }
)




