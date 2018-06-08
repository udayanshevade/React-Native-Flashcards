import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  title: '',
  isEditing: false,
  cardEditForm: {
    id: 0,
    question: '',
    answer: '',
  },
  questions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_SET_TITLE:
      return immutable.set(state, 'title', action.title);
    case types.CREATE_ADD_QUESTION:
      return immutable.set(state, ['questions', action.id], { ...action.cardData });
    case types.CREATE_SET_CREATE_OVERLAY_VISIBLE:
      return immutable.set(state, 'isOverlayVisible', action.isOverlayVisible);
    case types.CREATE_SET_IS_EDITING_CARD:
      return immutable.set(state, 'isEditing', action.isEditing);
    case types.CREATE_EDIT_CARD_VALUE:
      return immutable.set(state, ['cardEditForm', action.field], action.val);
    case types.CREATE_CLEAR_CARD_EDIT_VALUES:
      return immutable.set(state, 'cardEditForm', { ...initialState.cardEditForm });
    case types.CREATE_DECK_RESET:
      return { ...initialState, cardEditForm: { ...initialState.cardEditForm } };
    default:
      return state;
  }
};

export default reducer;
