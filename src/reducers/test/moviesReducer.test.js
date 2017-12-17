import * as actions from '../../actions/index';
import moviesReducer from '../movies-reducer';

describe('moviesReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(moviesReducer(undefined, {})).toEqual(expected);
  });

  it('should return new state with movie data added', () => {
    const movies = [{ title: 'Air Bud' }];
    const expected = [...movies];
    const action = actions.fetchMovies(movies);

    expect(moviesReducer(undefined, action)).toEqual(expected);
  });
});
