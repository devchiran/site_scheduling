import axios from 'axios'
import * as actions from './contactType'

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(fetchContactsRequest())
    axios
    .get('http://localhost:3333/sitelist')
    .then(response => {
      const contacts = response.data
      dispatch(fetchContactsSuccess(contacts))
    })
    .catch(error => {
      const errormsg = error.message
      dispatch(fetchContactsFailure(errormsg))
    })
  }
}

export const fetchContactsRequest = () => {
  return {
    type: actions.FETCH_CONTACTS_REQUEST
  }
}

export const fetchContactsSuccess = contacts => {
  return {
    type: actions.FETCH_CONTACTS_SUCCESS,
    payload: contacts
  }
}

export const fetchContactsFailure = error => {
  return {
    type: actions.FETCH_CONTACTS_FAILED,
    payload: error
  }
}