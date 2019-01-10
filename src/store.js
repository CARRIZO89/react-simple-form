import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const contactList = (state = [], action) => {
  if (action.type === "ADD_TO_LIST") {
    return state.concat(action.contact)
  }

  return state
};

const countries = (state = [], action) => {
  if (action.type === "LOAD_COUNTRIES") {
    return action.countries
  }

  return state
};

const current_contact = (state = {}, action) => {
  if (action.type === "SET_CURRENT_CONTACT") {
    return action.contact
  }

  return state
};

export default createStore(
  combineReducers({ contactList, countries, current_contact }),applyMiddleware(thunk)
);
