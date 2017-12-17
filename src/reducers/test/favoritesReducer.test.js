import * as actions from '../../actions/index';
import favoritesReducer from '../favorites-reducer';

describe('favoritesReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('should return new state with movie data added to favorites', () => {
    const movie = { title: 'Air Bud' };
    const expected = [movie];
    const action = actions.addFavorite(1, movie);

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  });
});
