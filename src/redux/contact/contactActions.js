import axios from 'axios'
import * as actions from './contactType'

export const fetchContacts = (pageNum, recordsLength) => {
  return (dispatch) => {
    dispatch(fetchContactsRequest())
    axios
    .get(`https://tracktik-challenge.staffr.com/sites?_expand=client&_page=${pageNum}&_limit=${recordsLength}`)
    .then(response => {
      const contacts = response.data
      // Below logic is written as total records length is not returnned in the api response
      // Else the api quary parameter can be replaced by [_start=xx&_limit=yy]
      const hasContacts = response.data.length === recordsLength ? true : false
      dispatch(fetchContactsSuccess(contacts, hasContacts))
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

export const fetchContactsSuccess = (contacts, hasContacts) => {
  return {
    type: actions.FETCH_CONTACTS_SUCCESS,
    payload: { contacts, hasContacts }
  }
}

export const fetchContactsFailure = error => {
  return {
    type: actions.FETCH_CONTACTS_FAILED,
    payload: error
  }
}