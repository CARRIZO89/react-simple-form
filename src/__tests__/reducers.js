import { contactList, countries, current_contact } from '../reducers';

describe('contactList', () => {
  it('return empty initial state when state is undefined', () => {
    expect(contactList(undefined, {})).toEqual([])
  });

  it('recives contacts', () => {
    const contact_list = [
      {
        name: "Miguel",
        surname: "Carrizo",
        country: "Argentina",
        birthday: "12/06/1989"
      },
      {
        name: "Nicolas",
        surname: "Carrizo",
        country: "Argentina",
        birthday: "12/06/1992"
      }
    ];

    expect(
      contactList([], { type: "ADD_TO_LIST", contact: contact_list })
    ).toEqual(contact_list)
  });
});

describe('countries', () => {
  it('return empty initial state when state is undefined', () => {
    expect(countries(undefined, {})).toEqual([])
  });

  it('return countries', () => {
    const countries_list = [
      {name: "Argentina"},
      {name: "Chile"},
      {name: "Brazil"}
    ];

    expect(
      countries([], {type: "LOAD_COUNTRIES", countries: countries_list})
    ).toEqual(countries_list)
  });
});

describe('current_contact', () => {
  it('return empty initial state when state is undefined', () => {
    const current_contact_empty = {
      name: "",
      surname: "",
      country: "",
      birthday: ""
    }

    expect(current_contact(undefined, {})).toEqual(current_contact_empty)
  });

  it('recive contact', () => {
    const cc = {
      name: "Maria",
      surname: "Juarez",
      country: "Argentina",
      birthday: "12/06/1989"
    }

    expect(
      current_contact({}, {type: "SET_CURRENT_CONTACT", current_contact: cc})
    ).toEqual(cc)
  });
});
