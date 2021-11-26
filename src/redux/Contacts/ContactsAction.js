import {createAction} from "@reduxjs/toolkit";

export const fetchContactItemRequest = createAction("contacts/fetchContactItemRequest")
export const fetchContactItemSuccess = createAction("contacts/fetchContactItemSuccess")
export const fetchContactItemError = createAction("contacts/fetchContactItemError")
export const addContactItemRequest = createAction("contacts/addContactItemRequest")
export const addContactItemSuccess = createAction("contacts/addContactItemSuccess")
export const addContactItemError = createAction("contacts/addContactItemError")
export const deleteContactItemRequest = createAction("contacts/deleteContactItemRequest")
export const deleteContactItemSuccess = createAction("contacts/deleteContactItemSuccess")
export const deleteContactItemError = createAction("contacts/deleteContactItemError")
export const changeFilterItem = createAction("contact/filter")


