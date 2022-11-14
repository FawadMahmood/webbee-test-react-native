import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import saga from './rootSaga';
import { reduxStorage } from './storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'rootKeyPersist',
    storage: reduxStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
})


export const persistor = persistStore(store);
sagaMiddleware.run(saga);
