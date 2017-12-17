const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAV': 
    console.log(action);
    return [...state, action.movieObj];
  case 'REMOVE_FAV':
    console.log(action.movieId);
    return state.filter(movie => {
      console.log(movie.movie_id)
      return movie.movie_id !== action.movieId});
  case 'FETCH_FAVS':
    console.log(action);
    return [];
  default: 
    return state;
  }
};

export default favoritesReducer;