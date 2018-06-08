import * as types from '../types';
import * as decksActions from '../decks';

describe('While handling individual deck actions,', () => {
  it('Quiz mode can be toggled.', () => {
    const testing = true;
    const expected = {
      type: types.DECK_SET_TESTING,
      testing,
    };
    expect(action.deckSetTesting(testing)).toEqual(expected);
  });

  it('Recorded results can be emptied from a quiz.', () => {
    const expected = {
      type: types.DECK_EMPTY_RESULTS,
    };
    expect(action.deckEmptyResults()).toEqual(expected);
  });

  it('The quiz can be reset.', () => {
    const expected = {
      type: types.DECK_QUIZ_RESET,
    };
    expect(action.deckResetQuiz()).toEqual(expected);
  });

  it('Track the active slide of the quiz.', () => {
    const activeSlide = 100;
    const expected = {
      type: types.DECK_QUIZ_SET_ACTIVE_SLIDE,
      activeSlide,
    };
    expect(action.deckQuizSetActiveSlide(activeSlide)).toEqual(expected);
  });

  it('The result of a quiz card can be recorded.', () => {
    const correct = 'incorrect';
    const expected = {
      type: types.DECK_QUIZ_SET_QUESTION_CORRECT,
      correct,
    };
    expect(action.deckQuizSetQuestionCorrect(correct)).toEqual(expected);
  });

  it('The quiz finished status can be marked.', () => {
    const finished = true;
    const expected = {
      type: types.DECK_QUIZ_SET_FINISHED,
      finished,
    };
    expect(action.deckSetQuizFinished(finished)).toEqual(expected);
  });

  it('The default of a swipe being assumed correct can be set.', () => {
    const swipeDefaultCorrect = true;
    const expected = {
      type: types.DECK_SET_QUIZ_DEFAULT_SWIPE_CORRECT,
      swipeDefaultCorrect,
    };
    expect(
      action.deckSetQuizDefaultSwipeCorrect(swipeDefaultCorrect)
    ).toEqual(expected);
  });

  it('The carousel can be initialized.', () => {
    const isInitialized = true;
    const expected = {
      type: types.DECK_SET_CAROUSEL_INITIALIZED,
      isInitialized,
    };
    expect(action.deckSetCarouselInitialized(isInitialized)).toEqual(expected);
  });

  it('The editing overlay can be toggled.', () => {
    const isEditVisible = true;
    const expected = {
      type: types.DECK_SET_EDIT_OVERLAY_VISIBLE,
      isEditVisible,
    };
    expect(action.deckSetEditOverlayVisible(isEditVisible)).toEqual(expected);
  });

  it('We can set whether a card is being added or edited.', () => {
    const isEditing = true;
    const expected = {
      type: types.DECK_SET_IS_EDITING_CARD,
      isEditing,
    };
    expect(action.deckSetIsEditingCard(isEditing)).toEqual(expected);
  });

  it('Quiz mode can be toggled.', () => {
    const testing = true;
    const expected = {
      type: types.DECK_SET_TESTING,
      testing,
    };
    expect(action.deckSetTesting(testing)).toEqual(expected);
  });

  it('The value of a field in the update form can be updated.', () => {
    const val = 'question';
    const field = 'field';
    const expected = {
      type: types.DECK_EDIT_CARD_VALUE,
      val,
      field,
    };
    expect(action.deckEditCardValue(val, field)).toEqual(expected);
  });

  it('The edit form can be cleared.', () => {
    const expected = {
      type: types.DECK_CLEAR_CARD_EDIT_VALUES,
    };
    expect(action.deckClearEditValues()).toEqual(expected);
  });
});
