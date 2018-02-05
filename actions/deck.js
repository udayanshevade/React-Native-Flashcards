import * as types from './types';

export const deckSetTesting = testing => ({
  type: types.DECK_SET_TESTING,
  testing,
});

export const deckEmptyResults = () => ({
  type: types.DECK_EMPTY_RESULTS,
});

export const deckResetQuiz = () => ({
  type: types.DECK_QUIZ_RESET,
});

export const deckQuizSetActiveSlide = activeSlide => ({
  type: types.DECK_QUIZ_SET_ACTIVE_SLIDE,
  activeSlide,
});

export const deckQuizSetQuestionCorrect = (index, correct) => ({
  type: types.DECK_QUIZ_SET_QUESTION_CORRECT,
  index,
  correct,
});

export const deckSetQuizFinished = (finished) => ({
  type: types.DECK_QUIZ_SET_FINISHED,
  finished,
});

export const deckSetQuizDefaultSwipeCorrect = (swipeDefaultCorrect) => ({
  type: types.DECK_SET_QUIZ_DEFAULT_SWIPE_CORRECT,
  swipeDefaultCorrect,
});

export const deckSetCarouselInitialized = (isInitialized) => ({
  type: types.DECK_SET_CAROUSEL_INITIALIZED,
  isInitialized,
});
