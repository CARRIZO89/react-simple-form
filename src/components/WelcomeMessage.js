import React, { Component } from 'react';
import { connect } from 'react-redux';

class WelcomeMessage extends Component {

  splitBirthday(birthday){
    let bir = birthday.split("/");
    return {day: bir[0], month: bir[1], bornYear: parseInt(bir[2])};
  }

  calculateAge(bornYear){
    let current_year = new Date().getFullYear();
    let current_age = current_year - bornYear;
    return (current_age)
  }

  render(){
    if (this.props.current_contact != null) {
      const { name, country, birthday } = this.props.current_contact;
      const { day, month, bornYear } = this.splitBirthday(birthday);
      const age = this.calculateAge(bornYear);

      return (
        <div>
          {`Hello ${name} from ${country}. On ${day} of ${month} you will have ${age}`}
        </div>
      );
    } else {
      return ('');
    }
  }
};

const mapStateToProps = state => {
  return {
    current_contact: state.current_contact
  };
};

export default connect(mapStateToProps)(WelcomeMessage);
