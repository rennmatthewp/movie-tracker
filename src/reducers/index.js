import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers ({
  movies: moviesReducer,
  users: userReducer 
});

export default rootReducer;