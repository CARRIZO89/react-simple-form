import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

export const ContactList = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {props.contactList.map((contact, index) =>
          <tr id="contact" key={index}>
            <td>
              {contact.name}
            </td>
            <td>
              {contact.country}
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
