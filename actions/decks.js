import { AsyncStorage } from 'react-native'; 
import * as types from './types';
import { FLASHCARD_DECKS_STORAGE_KEY } from '../utils';

export const decksSetLoading = isLoading => ({
  type: types.DECKS_SET_LOADING,
  isLoading,
});

export const decksSetData = data => ({
  type: types.DECKS_SET_DATA,
  data,
});

export const decksAddData = newData => ({
  type: types.DECKS_ADD_DATA,
  newData,
});

export const decksRemoveData = deckTitle => ({
  type: types.DECKS_REMOVE_DATA,
  deckTitle,
});

export const decksUpdateFilter = filter => ({
  type: types.DECKS_UPDATE_FILTER,
  filter,
});

export const fetchDecksData = () => dispatch =>
  AsyncStorage.getItem(FLASHCARD_DECKS_STORAGE_KEY)
    .then((res) => {
      const decksData = JSON.parse(res) || {};
      console.log(decksData);
      dispatch(decksSetData(decksData));
      return decksData;
    });

export const decksRemove = deckTitle => (dispatch) => {
  return AsyncStorage
    .getItem(FLASHCARD_DECKS_STORAGE_KEY)
    .then((res) => {
      const data = JSON.parse(res) || {};
      data[deckTitle] = undefined;
      delete data[deckTitle];
      return AsyncStorage.setItem(FLASHCARD_DECKS_STORAGE_KEY, data)
        .then(() => {
          dispatch(decksRemoveData(deckTitle));
        });
    });
};

export const decksUpdateData = updatedData => (dispatch) => {
  if (!updatedData || !updatedData.title) return;
  return AsyncStorage
    .getItem(FLASHCARD_DECKS_STORAGE_KEY)
      .then((res) => {
        const decks = JSON.parse(res) || {};
        const deckData = decks.hasOwnProperty(updatedData.title);
        const deckExists = !!deckData;
        if (!deckExists) return;
        return AsyncStorage.mergeItem(FLASHCARD_DECKS_STORAGE_KEY, JSON.stringify({
          [updatedData.title]: updatedData,
        })).then(() => {
          dispatch(dispatch(decksAddData(updatedData)));
        });
      });
};
