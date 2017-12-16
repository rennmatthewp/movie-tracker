const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAV': 
    console.log(action)
    return [...state, action.movieObj];
  default: 
    return state;
  }
};

export default favoritesReducer;