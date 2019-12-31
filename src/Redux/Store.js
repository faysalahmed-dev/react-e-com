import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root.reducer';

import rootSage from './root.sagas';

let composeEnhancers = compose;

// list of all the middlerware
// const middleWare = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

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
// run the sage middleware
sagaMiddleware.run(rootSage);
export const persistor = persistStore(store);
