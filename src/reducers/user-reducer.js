const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACCOUNT_ERROR':
    console.log(action)
      return {...state};
    case 'CREATE_ACCOUNT': 
    console.log(action)
      return {...state, ...action.userObj};
    case 'LOGIN':
      return {...state, ...action.userObj};
    case 'LOGOUT':
      return {...state};
    default: 
      return state;
  }
};

export default userReducer;