import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root.reducer';

// list of all the middlerware
const middleWare = [logger];

// create the store
export const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
