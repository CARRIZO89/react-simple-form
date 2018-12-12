import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "ADD_TO_LIST") {
    return {
      ...state,
      contactList: state.contactList.concat(action.contact)
    }
  }
  console.log(state);
  return state;
};

export default createStore(reducer, { contactList: [] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
