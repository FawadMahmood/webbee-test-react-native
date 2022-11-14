import { all } from 'redux-saga/effects';

import categories from './categories/sagas';
import fields from './fields/sagas';
import items from './items/sagas';


export default function* rootSaga() {
    yield all([
        categories(),
        fields(),
        items(),
        // some more
    ]);
}
