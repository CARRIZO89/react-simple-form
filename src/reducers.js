const initialContact = {name: '', surname: '', country:'', birthday: ''};

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

const current_contact = (state = initialContact, action) => {
  if (action.type === "SET_CURRENT_CONTACT") {
    return action.current_contact
  }

  return state
};

export {contactList, countries, current_contact};
