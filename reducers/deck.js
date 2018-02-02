import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  testing: false,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.DECK_SET_TESTING:
      return immutable.set(state, 'testing', action.testing);
    default:
      return state;
  }
};

export default reducer;
