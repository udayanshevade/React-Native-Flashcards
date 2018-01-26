import * as types from './types';

export const decksSetLoading = isLoading => ({
  type: types.DECKS_SET_LOADING,
  isLoading,
});

export const dataSetData = data => ({
  type: types.DECKS_SET_DATA,
  data,
});

export const decksUpdateFilter = filter => ({
  type: types.DECKS_UPDATE_FILTER,
  filter,
});
