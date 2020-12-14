import * as actions from './contactType'

const initialState = {
    loading: false,
    contactslist: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_CONTACTS_SUCCESS:
            return {
                loading: false,
                contactslist: action.payload,
                error: ''
            }
        case actions.FETCH_CONTACTS_FAILED:
            return {
                laoding: false,
                contactslist: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
