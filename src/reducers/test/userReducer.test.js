import * as actions from '../../actions/index';
import userReducer from '../user-reducer';

describe('userReducer', () => {
  let expected;
  beforeEach(() => {
    expected = {loggedIn: false};
    
  });

  it('should return the default state', () => {

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return default state if there is an account error', () => {
    const action = actions.newAccountError();

    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return default state when a new account is created', () => {
    const userObj = {
      username: 'Air Bud',
      email: 'bballer@woof.com',
      password: 'bark'
    };
    
    const action = actions.createAccount(userObj);
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return new state with new user data when a user logs in', () => {
    const userObj = {
      username: 'Air Bud',
      email: 'bballer@woof.com',
      password: 'bark'
    };

    expected = {
      ...userObj,
      loggedIn: true
    };
    
    const action = actions.logIn(userObj);
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return default state if there is a logIn error', () => {
    const action = actions.logInError();

    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('should return default state if a user logs out', () => {
    const action = actions.logOut();

    expect(userReducer(undefined, action)).toEqual(expected);
  });
});