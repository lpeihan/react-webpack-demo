import { createStore, applyMiddleware } from 'redux';
import reduces from '../reducers';
import thunk from 'redux-thunk';

const configureStore = (preloadedState) => {
  const store = createStore(
    reduces,
    preloadedState,
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
