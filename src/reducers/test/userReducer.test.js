import * as actions from '../../actions/index';
import userReducer from '../user-reducer';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return new state with new User data added', () => {
    const userObj = {
      username: 'Air Bud',
      email: 'bballer@woof.com',
      password: 'bark' };
    const expected = {...userObj};

    expect(userReducer(undefined, actions.createAccount(userObj))).toEqual(
      expected
    );
  });
});