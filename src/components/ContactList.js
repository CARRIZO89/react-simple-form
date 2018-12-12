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
    console.log(store.getState().contactList)
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contactList.map(name =>
            <tr>
              <td>
                {name}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default ContactList;
