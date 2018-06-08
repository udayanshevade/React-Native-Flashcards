import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  data: {},
  isLoading: false,
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DECKS_SET_LOADING:
      return immutable.set(state, 'isLoading', action.isLoading);
    case types.DECKS_SET_DATA:
      return immutable.set(state, 'data', action.data);
    case types.DECKS_ADD_DATA: {
      const { newData } = action;
      return immutable.set(state, ['data', newData.title], newData);
    }
    case types.DECKS_REMOVE_DATA:
      return immutable.set(state, 'data', immutable.remove(state.data, action.deckTitle));
    case types.DECKS_UPDATE_FILTER: {
      return immutable.set(state, 'filter', action.filter);
    }
    default:
      return state;
  }
};

export default reducer;
