import { all } from 'redux-saga/effects';

import categories from './categories/sagas';


export default function* rootSaga() {
    yield all([
        categories(),
        // some more
    ]);
}
