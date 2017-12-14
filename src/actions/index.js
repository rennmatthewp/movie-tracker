import { apiFetch, postNewAccount } from '../helper/apiHelper';

export const fetchMovies = (moviesArray) => ({
  type: 'FETCH_MOVIES',
  moviesArray
});
  

export const storeMovies = () => async (dispatch) => {
  try {
    const moviesArray = await apiFetch(); 
    dispatch(fetchMovies(moviesArray));
  } catch(error) {
    console.log(error)
  }
}

export const createAccount = (userObj) => ({
  type: 'CREATE_ACCOUNT',
  userObj
});

export const createNewUser = (userObj) => async (dispatch) => {
  const userData = await postNewAccount(userObj);
  dispatch(createAccount(userObj));
}
