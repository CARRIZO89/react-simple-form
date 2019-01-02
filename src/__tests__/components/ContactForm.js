import React from 'react';
import ConnectedContactForm from '../../components/ContactForm';
import enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

it('add contact to contact list', () => {
  const store = mockStore({
    contact: [{
      name: 'Nicolas',
      country: 'Argentina',
      birthday: '02/05/1991'}]
  });

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedContactForm/>
    </Provider>);
  wrapper.find('#btn-save').simulate('click');

  const action = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe("ADD_TO_LIST");
  expect(actions[0].contact).not.toBeNull();
});
