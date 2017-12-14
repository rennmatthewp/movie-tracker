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
});
