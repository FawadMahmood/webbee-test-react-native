import { all } from 'redux-saga/effects';

import categories from './categories/sagas';
import fields from './fields/sagas';


export default function* rootSaga() {
    yield all([
        categories(),
        fields(),
        // some more
    ]);
}
