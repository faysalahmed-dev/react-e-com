import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer'
// list of all the middlerware
const middleWare = [logger];
// create the store
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
