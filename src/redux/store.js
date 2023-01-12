import { createStore, combineReducers } from "redux";
import { modalReducer, contactsReducer } from "./reducers";

const rootReducer = combineReducers({
    modal: modalReducer,
    contacts: contactsReducer
})

export const store = createStore(rootReducer)

window.state = store.getState