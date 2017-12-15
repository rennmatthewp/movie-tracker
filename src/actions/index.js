import * as helper from '../helper/apiHelper';

export const fetchMovies = (moviesArray) => ({
  type: 'FETCH_MOVIES',
  moviesArray
});
  

export const storeMovies = () => async (dispatch) => {
  try {
    const moviesArray = await helper.apiFetch(); 
    dispatch(fetchMovies(moviesArray));
  } catch(error) {
    console.log(error);
  }
};




export const createAccount = (userObj) => ({
  type: 'CREATE_ACCOUNT',
  userObj
});

export const createNewUser = (userObj) => async (dispatch) => {
  const userData = await helper.postNewAccount(userObj);
  dispatch(createAccount(userData));
};





export const logIn = (userObj) => ({
  type: 'LOGIN',
  userObj
});

export const loginUser = (userObj) => async (dispatch) => {
  const userData = await helper.postUserLogin(userObj);
  dispatch(logIn(userData));
}


export const logOut = () => ({
  type: 'LOGOUT'
})

