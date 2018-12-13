import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const ContactList = (props) => {
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
        {props.contactList.map(contact =>
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

const mapStateToProps = state => {
  return {
    contactList: state.contactList
  };
};

export default connect(mapStateToProps)(ContactList);
