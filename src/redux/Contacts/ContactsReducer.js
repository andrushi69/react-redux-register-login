import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {
  addContactItemError,
  addContactItemRequest,
  addContactItemSuccess,
  changeFilterItem,
  deleteContactItemError,
  deleteContactItemRequest,
  deleteContactItemSuccess,
  fetchContactItemError,
  fetchContactItemRequest,
  fetchContactItemSuccess,
} from "./ContactsAction";


const contactsReducer = createReducer([], {
  [fetchContactItemSuccess]: (_, {payload}) => payload,
  [addContactItemSuccess]: (state, {payload}) => [...state, payload],
  [deleteContactItemSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload)
})


const changeFilter = createReducer("", {
  [changeFilterItem]: (_, {payload}) => payload
})

const loading = createReducer(false, {
  [fetchContactItemRequest]: () => true,
  [fetchContactItemSuccess]: () => false,
  [fetchContactItemError]: () => false,
  [addContactItemRequest]: () => true,
  [addContactItemSuccess]: () => false,
  [addContactItemError]: () => false,
  [deleteContactItemRequest]: () => true,
  [deleteContactItemSuccess]: () => false,
  [deleteContactItemError]: () => false
})

export default combineReducers({contactsReducer, changeFilter, loading})