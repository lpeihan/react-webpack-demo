import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduces from '../reducers';
import thunk from 'redux-thunk';

const configureStore = (preloadedState) => {
  const store = createStore(
    reduces,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );

  return store;
};

export default configureStore;
