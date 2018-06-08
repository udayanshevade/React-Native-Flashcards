import { AsyncStorage } from 'react-native';
import * as types from './types';
import { decksAddData } from './decks';
import { FLASHCARD_DECKS_STORAGE_KEY } from '../utils';

export const createSetTitle = title => ({
  type: types.CREATE_SET_TITLE,
  title,
});

export const createSetIsOverlayVisible = isOverlayVisible => ({
  type: types.CREATE_SET_CREATE_OVERLAY_VISIBLE,
  isOverlayVisible,
});

export const createSetIsEditing = isEditing => ({
  type: types.CREATE_SET_IS_EDITING_CARD,
  isEditing,
});

export const createEditCardValue = (val, field) => ({
  type: types.CREATE_EDIT_CARD_VALUE,
  val,
  field,
});

export const createClearEditValues = () => ({
  type: types.CREATE_CLEAR_CARD_EDIT_VALUES,
});

export const createAddQuestion = ({ title, id, ...cardData}) => ({
  type: types.CREATE_ADD_QUESTION,
  id,
  cardData,
});

export const createDeckNew = newDeckData => (dispatch) => {
  if (!newDeckData || !newDeckData.title) return;
  return AsyncStorage
    .getItem(FLASHCARD_DECKS_STORAGE_KEY)
      .then((res) => {
        let decksData = JSON.parse(res);
        let storageAction;
        if (!decksData) {
          decksData = {};
          storageAction = AsyncStorage.setItem;
        } else {
          storageAction = AsyncStorage.mergeItem;
        }
        const deckExists = decksData.hasOwnProperty(newDeckData.title);
        if (deckExists) return;
        return storageAction(FLASHCARD_DECKS_STORAGE_KEY, JSON.stringify({
          [newDeckData.title]: newDeckData,
        })).then((res) => {
          console.log(res);
          dispatch(dispatch(decksAddData(newDeckData)));
          return res;
        });
      });
};

export const createReset = () => ({
  type: types.CREATE_DECK_RESET,
});
