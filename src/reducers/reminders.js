import {
  ADD_REMINDER,
  DELETE_REMINDER,
  CLEAR_REMINDERS
} from '../constants';

import {
  cookie
} from '../utils';

const reminders = (state = cookie.get('reminders') || [], action = {}) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      const { text, date } = action;
      reminders = [
        ...state,
        {
          id: Math.random(),
          text,
          date
        }
      ];
      cookie.set('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== action.id);
      cookie.set('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      cookie.set('reminders', reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;
