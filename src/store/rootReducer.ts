import { combineReducers } from 'redux';


import categories from './categories/reducers';
import fields from './fields/reducers';


const rootReducer = combineReducers({
    categories,
    fields
});

export default rootReducer;
