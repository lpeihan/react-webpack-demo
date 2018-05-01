import { combineReducers } from 'redux';

import counter from './counter';
import user from './user';

const reducers = combineReducers({
  counter,
  user
});

export default reducers;
