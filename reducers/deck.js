import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  testing: false,
  activeSlide: 0,
  finished: false,
  results: {},
  swipeDefaultCorrect: true,
  isInitialized: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DECK_SET_TESTING:
      return immutable.set(state, 'testing', action.testing);
    case types.DECK_QUIZ_SET_ACTIVE_SLIDE:
      return immutable.set(state, 'activeSlide', action.activeSlide);
    case types.DECK_QUIZ_SET_QUESTION_CORRECT: {
      const { index, correct } = action;
      const { results: priorResults } = state;
      const updated = priorResults[index] === correct ? null : correct;
      return immutable.set(state, ['results', index], updated);
    }
    case types.DECK_QUIZ_SET_FINISHED:
      return immutable.set(state, 'finished', action.finished);
    case types.DECK_SET_QUIZ_DEFAULT_SWIPE_CORRECT:
      return immutable.set(state, 'swipeDefaultCorrect', action.swipeDefaultCorrect);
    case types.DECK_SET_CAROUSEL_INITIALIZED:
      return immutable.set(state, 'isInitialized', action.isInitialized);
    case types.DECK_EMPTY_RESULTS:
      return immutable.set(state, 'results', {});
    case types.DECK_QUIZ_RESET: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default reducer;
