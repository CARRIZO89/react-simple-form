import React from 'react';
import ConnectedContactList from '../../components/ContactList';
import enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

it('renders no contacts when store is empty', () => {
  const store = mockStore({ contactList: [] });

  const wrapper = render(
    <Provider store={store}>
      <ConnectedContactList />
    </Provider>);
  expect(wrapper.find("#contact").length).toBe(0);
});

it('render contact', () => {
  const store = mockStore ({
    contactList: [{
      name: 'Miguel Antonio',
      country: 'Argentina',
      birthday: '02/05/1989'}]
  });

  const wrapper = render(
    <Provider store={store}>
      <ConnectedContactList/>
    </Provider>);
  expect(wrapper.find("#contact").length).toBe(1);
});
// Para la versión 6, en adelante, de "react-redux" se utiliza el concepto de "context"
// es por eso q el "store" se lo pasa de esta manera al componente a testear:
// <Provider store={store}>
//   <ConnectedComponent/>
// </Provider>
