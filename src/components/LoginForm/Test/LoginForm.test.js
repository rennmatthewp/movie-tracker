import React from 'react';
import { shallow } from 'enzyme';
import Login from '../LoginForm.js';


it('should match its snap shot', () => {
  const LoginWrapper = shallow(<Login />);

  expect(LoginWrapper).toMatchSnapshot();
});