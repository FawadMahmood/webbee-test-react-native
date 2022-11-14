import { combineReducers } from 'redux';


import categories from './categories/reducers';
import fields from './fields/reducers';
import items from './items/reducers';



const rootReducer = combineReducers({
    categories,
    fields,
    items
});

export default rootReducer;
