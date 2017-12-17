const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAV': 
    return [...state, action.movieObj];
  case 'REMOVE_FAV':
    return state.filter(movie => {
      return movie.movie_id !== action.movieId});
  case 'FETCH_FAVS':
    return [ ...action.moviesArray];
  case 'LOGOUT':
    return [];
  default: 
    return state;
  }
};

export default favoritesReducer;