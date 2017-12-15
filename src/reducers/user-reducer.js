const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT': 
      return {...state, ...action.userObj};
    case 'LOGIN':
      return {...state, ...action.userObj};
    case 'LOGOUT':
      return {};
    default: 
      return state;
  }
};

export default userReducer;