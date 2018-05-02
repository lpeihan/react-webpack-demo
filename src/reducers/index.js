import { combineReducers } from 'redux';

import counter from './counter';
import user from './user';
import reminders from './reminders';

const reducers = combineReducers({
  counter,
  user,
  reminders
});

export default reducers;
