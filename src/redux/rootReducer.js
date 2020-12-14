
import { combineReducers } from 'redux'
import contactReducer from './contact/contactReducers'

const rootReducer = combineReducers({
    contacts: contactReducer
})

export default rootReducer