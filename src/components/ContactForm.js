import React, { Component } from 'react';
import { addToList, setCurrentContact } from '../actionCreators';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import './ContactForm.css'

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

    this.props.addToList(contact);
    this.props.setCurrentContact(contact);
    this.setState({name: '', surname: '', country:'', birthday: ''});
  }

  render() {
    const { name, surname,birthday } = this.state.contact

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" placeholder='Name' name='name' value={name} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder='Surname' name='surname' value={surname} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="select" name='country' onChange={this.handleChange}>
            <option value="select">Select Country</option>
            {this.loadCountries()}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder='Birthday' name='birthday' value={birthday} onChange={this.handleChange} />
        </FormGroup>
        <input id="btn-save" type="submit" value="Save" />
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
    },
    setCurrentContact(contact) {
      dispatch(setCurrentContact(contact));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
