import React from 'react';
import { ContactList } from '../../components/ContactList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('renders no contacts when store is empty', () => {
  const wrapper = shallow(<ContactList contactList={[]}/>);
  expect(wrapper.find("#contact").length).toBe(0);
});
