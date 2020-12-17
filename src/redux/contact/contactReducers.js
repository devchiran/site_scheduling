import * as actions from './contactType'

const initialState = {
    contactslist: [],
    hasContacts: true,
    pageNumber: 1,
    recordsLength: 20,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CONTACTS_REQUEST:
            return {
                ...state
            }
        case actions.FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contactslist: [...state.contactslist, ...action.payload.contacts],
                hasContacts: action.payload.hasContacts,
                pageNumber: state.pageNumber + 1,
                error: ''
            }
        case actions.FETCH_CONTACTS_FAILED:
            return {
                ...state,
                contactslist: [...state.contactslist],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
