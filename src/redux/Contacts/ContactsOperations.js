import axios from "axios";
import {
  addContactItemError,
  addContactItemRequest,
  addContactItemSuccess,
  deleteContactItemError,
  deleteContactItemRequest,
  deleteContactItemSuccess,
  fetchContactItemError,
  fetchContactItemRequest,
  fetchContactItemSuccess
} from "./ContactsAction"

const fetchContactsItem = () => async dispatch => {
  dispatch(fetchContactItemRequest())

  try {
    const {data} = await axios.get("/contacts")
    dispatch(fetchContactItemSuccess(data))
  } catch (error) {
    dispatch(fetchContactItemError(error))
  }
}


const addContactItem = (name, number) => dispatch => {
  const contacts = {
    name,
    number,
    completed: false
  }
  dispatch(addContactItemRequest())
  axios
    .post("/contacts", contacts)
    .then(({data}) =>
      dispatch(addContactItemSuccess(data))
    )
    .catch(({error}) => dispatch(addContactItemError(error)))

}
const deleteContactItem = (id) => dispatch => {
  dispatch(deleteContactItemRequest())
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(deleteContactItemSuccess(id)))
    .catch((error) => dispatch(deleteContactItemError(error)))

}
const contactsOperations = {
  addContactItem,
  deleteContactItem,
  fetchContactsItem,
};

export default contactsOperations