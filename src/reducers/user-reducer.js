const userReducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
  case 'ACCOUNT_ERROR':
    return {...state};
  case 'CREATE_ACCOUNT': 
    return state;
  case 'LOGIN':
    return {...state, ...action.userObj, loggedIn: true};
  case 'LOGIN_ERROR':
    return {loggedIn: false};
  case 'LOGOUT':
    return {loggedIn: false};
  default: 
    return state;
  }
};

export default userReducer;