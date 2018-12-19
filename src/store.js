import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState =  { contactList: [], countries: [] };

const reducer = (state, action) => {
  if (action.type === "ADD_TO_LIST") {
    return {
      ...state,
      contactList: state.contactList.concat(action.contact)
    }
  } else if (action.type === "LOAD_COUNTRIES") {
      return {
        ...state,
        countries: action.countries
      }
  } else {
    return {
      ...state,
      current_contact: action.current_contact
    }
  }
  return state
};

export default createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);
