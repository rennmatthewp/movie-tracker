import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import userReducer from './user-reducer';
import errorReducer from './error-reducer';


const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  errorStatus: errorReducer
});

export default rootReducer;