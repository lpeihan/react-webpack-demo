import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduces from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
    reduces,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger))
  );

  return store;
};

export default configureStore;
