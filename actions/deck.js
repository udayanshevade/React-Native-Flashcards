import immutable from 'object-path-immutable';
import * as types from './types';
import { decksUpdateData } from './decks';

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

export const deckSetQuizFinished = finished => ({
  type: types.DECK_QUIZ_SET_FINISHED,
  finished,
});

export const deckSetQuizDefaultSwipeCorrect = swipeDefaultCorrect => ({
  type: types.DECK_SET_QUIZ_DEFAULT_SWIPE_CORRECT,
  swipeDefaultCorrect,
});

export const deckSetCarouselInitialized = isInitialized => ({
  type: types.DECK_SET_CAROUSEL_INITIALIZED,
  isInitialized,
});

export const deckSetEditOverlayVisible = isEditVisible => ({
  type: types.DECK_SET_EDIT_OVERLAY_VISIBLE,
  isEditVisible,
});

export const deckSetIsEditingCard = isEditing => ({
  type: types.DECK_SET_IS_EDITING_CARD,
  isEditing,
});

export const deckEditCardValue = (val, field) => ({
  type: types.DECK_EDIT_CARD_VALUE,
  val,
  field,
});

export const deckClearEditValues = () => ({
  type: types.DECK_CLEAR_CARD_EDIT_VALUES,
});

const getDeckData = (id, getState) => {
  const { data: decksData } = getState().decks;
  const deckData = decksData[id];
  return deckData;
};

export const deckUpdateCard = ({ title, id, ...cardData }) => (dispatch, getState) => {
  const deckData = getDeckData(title, getState);
  if (!deckData) {
    console.log('Invalid card data');
    return;
  } else {
    const updatedData = immutable.set(deckData, ['questions', id], cardData);
    dispatch(decksUpdateData(updatedData));
  }
};
