import { createStore, applyMiddleware } from 'redux';
import reduces from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
    reduces,
    preloadedState,
    applyMiddleware()
  );

  return store;
};

export default configureStore;
