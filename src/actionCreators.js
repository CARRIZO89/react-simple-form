import axios from 'axios';

const loadCountries = () => {
  return dispatch => {
    return axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      dispatch({
        type: "LOAD_COUNTRIES",
        countries: response.data.map(country => country.name)
      });
    });
  };
};

const addToList = contact => {
  return {
    type: "ADD_TO_LIST",
    contact
  };
};

export { loadCountries, addToList };
