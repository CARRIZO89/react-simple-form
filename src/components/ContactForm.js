import React, { Component } from 'react';
import store from '../store';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        name: '',
        surname: '',
        country: '',
        birthday: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const { name, value } = event.target;
    let contact = this.state.contact
    contact[name] = value //contact es un hash, por eso se accede a los elementos del mismo de la forma "contact[name]"
    this.setState({
      contact
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const contact = {
      name: this.state.contact.name,
      surname: this.state.contact.surname,
      country: this.state.contact.country,
      birthday: this.state.contact.birthday
    };

    alert('Hello ' + contact.name + ' from ' + contact.country + '.' );
    this.addToList(contact);
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
          <select name='country' value={country} onChange={this.handleChange}>
            <option>Argentina</option>
            <option>Chile</option>
            <option>Brazil</option>
            <option>Uruguay</option>
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

  addToList(contact) {
    store.dispatch({
      type: "ADD_TO_LIST",
      contact
    })
  }
}

export default ContactForm;
