
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

const thunkMiddleware = require("redux-thunk").thunk;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;