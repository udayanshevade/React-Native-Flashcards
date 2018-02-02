import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  testing: false,
  activeSlide: 0,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.DECK_SET_TESTING:
      return immutable.set(state, 'testing', action.testing);
    case types.DECK_QUIZ_SET_ACTIVE_SLIDE:
      return immutable.set(state, 'activeSlide', action.activeSlide);
    default:
      return state;
  }
};

export default reducer;
