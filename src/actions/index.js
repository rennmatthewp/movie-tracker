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




export const createAccount = (id) => ({
  type: 'CREATE_ACCOUNT',
  id
});

export const createNewUser = (userObj) => async (dispatch) => {
  const userData = await helper.postNewAccount(userObj);
  if (userData === null) {
    dispatch(newAccountError());
  } else {
    dispatch(createAccount(userData.id));
    console.log(userObj)
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
  console.log(userData)
  dispatch(logIn(userData.data));
};


export const logOut = () => ({
  type: 'LOGOUT'
});

