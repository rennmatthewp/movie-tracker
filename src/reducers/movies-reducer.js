const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES': 
      return [...state, ...action.moviesArray];
    default: 
      return state;
  }
};

export default moviesReducer;