import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movies from './moviesReducer';
import user from '../user/userReducer';

const rootReducer = combineReducers({ movies, user })
const store = createStore(rootReducer, composeWithDevTools());

export default store;