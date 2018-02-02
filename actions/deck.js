import * as types from './types';

export const deckSetTesting = testing => ({
  type: types.DECK_SET_TESTING,
  testing,
});

export const deckQuizSetActiveSlide = activeSlide => ({
  type: types.DECK_QUIZ_SET_ACTIVE_SLIDE,
  activeSlide,
});
