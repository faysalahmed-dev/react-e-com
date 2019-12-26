import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// list of all the middlerware
const middleWare = [logger];

// create the store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
