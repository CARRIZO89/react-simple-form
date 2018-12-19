import React from 'react';
import { connect } from 'react-redux';

const WelcomeMessage = (props) => {
  if (props.current_contact != null) {
    const { name, surname, country, birthday } = props.current_contact;
    return (
      <div>
        {`Hello ${name} from ${country} on 12 of 34 you will have 4545`}
      </div>
    );
  } else {
    return ('');
  }
};

const mapStateToProps = state => {
  return {
    current_contact: state.current_contact
  };
};

export default connect(mapStateToProps)(WelcomeMessage);
