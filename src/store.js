import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const contactList = (state = [], action) => {
  if (action.type === "ADD_TO_LIST") {
    return state.concat(action.contact)
  } else {
    return action.current_contact
  }
  return state
};

const countries = (state = [], action) => {
  if (action.type === "LOAD_COUNTRIES") {
    return action.countries
  }
  return state
};

export default createStore(
  combineReducers({ contactList, countries }),applyMiddleware(thunk)
);
