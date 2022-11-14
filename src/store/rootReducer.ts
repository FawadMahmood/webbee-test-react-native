import { combineReducers } from 'redux';


import categories from './categories/reducers';

const rootReducer = combineReducers({
    categories
});

export default rootReducer;
