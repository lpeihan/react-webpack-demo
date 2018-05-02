import * as types from '../constants';

export const increment = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: types.INCREMENT });
    }, 1000);
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};
