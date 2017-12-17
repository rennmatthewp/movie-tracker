import * as actions from '../../actions/index';
import errorReducer from '../error-reducer';

describe('errorReducer', () => {
  it('should return the default state', () => {
    const expected = {
      errorMsg: '',
      isError: false
    };

    expect(errorReducer(undefined, {})).toEqual(expected);
  });

  it('should return new a errorStatus if new account fails', () => {
    const expected = {
      errorMsg: 'An account already exists with that email', 
      isError: true
    };
    const action = actions.newAccountError();

    expect(errorReducer(undefined, action)).toEqual(expected);
  });

  it('should return a new a errorStatus if a user login fails', () => {
    const expected = {
      errorMsg: 'Email and/or password do not match an existing account', 
      isError: true
    };
    const action = actions.logInError();
    
    expect(errorReducer(undefined, action)).toEqual(expected);
  });
});
