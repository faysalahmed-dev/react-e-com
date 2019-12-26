import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root.reducer';

let composeEnhancers = compose;

// list of all the middlerware
const middleWare = [];
// in development add logger and readux dev tools
if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

// create the store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
