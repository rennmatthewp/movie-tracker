const userReducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'ACCOUNT_ERROR':
      return {...state};
    case 'CREATE_ACCOUNT': 
      console.log(action)
      return state;
    case 'LOGIN':
      console.log(action)
      return {...state, ...action.userObj, loggedIn: true};
    case 'LOGOUT':
      console.log('LOGOUT')
      console.log(state)
      return {loggedIn: false};
    default: 
      return state;
  }
};

export default userReducer;