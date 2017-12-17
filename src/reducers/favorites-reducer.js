const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAV': 
    console.log(action);
    return [...state, action.movieObj];
  case 'REMOVE_FAV':
    console.log(action);
    return state.filter(movie => movie.id !== action.movieId);
  default: 
    return state;
  }
};

export default favoritesReducer;