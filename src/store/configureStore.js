import devConfigureStore from './configureStore.dev';
import prodConfigureStore from './configureStore.prod';

const configureStore =
  process.env.NODE_ENV === 'production' ? prodConfigureStore : devConfigureStore;

export default configureStore;
