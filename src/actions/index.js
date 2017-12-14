export const fetchMovies = (moviesArray) => ({
  type: 'FETCH_MOVIES',
  moviesArray
});

export const createAccount = (userObj) => ({
  type: 'CREATE_ACCOUNT',
  userObj
});


