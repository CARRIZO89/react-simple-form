import React, { Component } from 'react';
import store from '../store';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const contact = this.state.value;
    alert('A name was submitted: ' + contact );
    event.preventDefault();
    this.addToList(contact);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
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
