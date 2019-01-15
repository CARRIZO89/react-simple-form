import { loadCountries, addToList, setCurrentContact } from '../actionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => {moxios.install()});
afterEach(() => {moxios.uninstall()});

it('load countries', () => {
  const store = mockStore({ countries: [] });

  moxios.stubRequest('http://localhost:3001/countries', {
    status: 200,
    response: [
      {name: 'Argentina'},
      {name: 'Brazil'},
      {name: 'Chile'},
      {name: 'Uruguay'}
    ]
  });

  store.dispatch(loadCountries())
    .then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(1);
      expect(actions[0].type).toBe("LOAD_COUNTRIES");
      expect(actions[0].countries).not.toBeNull();
    });
});

it('add contact to list', () => {
  const store = mockStore({ contactList: [] });

  const contact = {
    name: "Maria",
    surname: "Juarez",
    country: "Argentina",
    birthday: "12/06/1989"
  }

  store.dispatch(addToList(contact));

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe("ADD_TO_LIST");
  expect(actions[0].contact).toBe(contact);
});

it('set current contact', () => {
  const current_contact_empty = {
    name: "",
    surname: "",
    country: "",
    birthday: ""
  }

  const store = mockStore({ current_contact: current_contact_empty });

  const contact = {
    name: "Miguel",
    surname: "Carrizo",
    country: "Francia",
    birthday: "12/06/1989"
  }

  store.dispatch(setCurrentContact(contact));

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe("SET_CURRENT_CONTACT");
  expect(actions[0].current_contact).toBe(contact);
});
