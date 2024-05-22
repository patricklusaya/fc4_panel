
import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducers';


// import counterReducer from './Counter/counter.reducer';


const rootReducer = combineReducers({

    items:ItemsReducer

});

export default rootReducer;