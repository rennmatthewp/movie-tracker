import * as actions from '../index';

describe('All actions', () => {
  it('has a type of FETCH_MOVIES', () => {
    const moviesArray = [{ title: 'Jaws' }];
    const expected = {
      type: 'FETCH_MOVIES',
      moviesArray
    };

    expect(actions.fetchMovies(moviesArray)).toEqual(expected);
  });

  it('has a type of CREATE_ACCOUNT', () => {
    const userObj = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const expected = {
      type: 'CREATE_ACCOUNT',
      userObj
    };

    expect(actions.createAccount(userObj)).toEqual(expected);
  });

  it('has a type of LOGIN', () => {
    const userObj = { 
      username: 'Julie',
      email: 'jmdursema@gmail.com', 
      password: 'guest' };
    const expected = {
      type: 'LOGIN',
      userObj
    };

    expect(actions.logIn(userObj)).toEqual(expected);
  });
});
