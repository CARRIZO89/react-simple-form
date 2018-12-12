import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import store from '../store'

class ContactList extends Component {
  constructor(){
    super();
    this.state = {
      contactList: []
    };
    store.subscribe(() => {
      this.setState({
        contactList: store.getState().contactList
      });
    });
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contactList.map(contact =>
            <tr>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.surname}
              </td>
              <td>
                {contact.birthday}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default ContactList;
