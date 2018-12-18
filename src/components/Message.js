import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
  const name = {props.name};
  console.log(name)
  return (
    <h1>HOLA</h1>
  );
};

const mapStateToProps = state => {
  return {
    current_contact: state.current_contact
  };
};

export default connect(mapStateToProps)(Message);
