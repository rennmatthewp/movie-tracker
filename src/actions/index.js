import * as helper from '../helper/apiHelper';

export const fetchMovies = (moviesArray) => ({
  type: 'FETCH_MOVIES',
  moviesArray
});
  

export const storeMovies = () => async (dispatch) => {
  try {
    const moviesArray = await helper.apiFetch(); 
    dispatch(fetchMovies(moviesArray));
  } catch (error) {
    console.log(error);
  }
};




export const createAccount = (userObj) => ({
  type: 'CREATE_ACCOUNT',
  userObj
});

export const createNewUser = (userObj) => async (dispatch) => {
  const userData = await helper.postNewAccount(userObj);
  if (userData === null) {
    dispatch(newAccountError());
  } else {
    dispatch(createAccount(userData));
    dispatch(loginUser({email: userObj.email, password: userObj.password}));
  }
};

export const newAccountError = () => ({
  type: 'ACCOUNT_ERROR',
  errorMsg: 'An account already exists with that email'
});





export const logIn = (userObj) => ({
  type: 'LOGIN',
  userObj
});

export const loginUser = (userObj) => async (dispatch) => {
  const userData = await helper.postUserLogin(userObj);
  dispatch(logIn(userData));
};


export const logOut = () => ({
  type: 'LOGOUT'
});

