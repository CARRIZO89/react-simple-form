import React, { Component } from 'react';
import { addToList } from '../actionCreators';
import { connect } from 'react-redux';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: '',
        surname: '',
        country: '',
        birthday: ''
      }
    };
  }

  loadCountries() {
    return this.props.countries.map( country =>
      <option key={country} value={country}>{country}</option>
    )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let contact = this.state.contact
    contact[name] = value //contact es un hash, por eso se accede a los elementos del mismo de la forma "contact[name]"
    this.setState({
      contact
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: this.state.contact.name,
      surname: this.state.contact.surname,
      country: this.state.contact.country,
      birthday: this.state.contact.birthday
    };

    alert('Hello ' + contact.name + ' from ' + contact.country + '.' );
    this.props.addToList(contact);
  }

  render() {
    const { name, surname, country ,birthday } = this.state.contact

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name='name' value={name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input type="text" name='surname' value={surname} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>Countries:</label>
          <select name='country' onChange={this.handleChange}>
            {this.loadCountries()}
          </select>
        </div>
        <div>
          <label>
            Birthday:
            <input type="text" name='birthday' value={birthday} onChange={this.handleChange} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToList(contact) {
      dispatch(addToList(contact));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
