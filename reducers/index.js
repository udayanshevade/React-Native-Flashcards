import { combineReducers } from 'redux';
import decks, { initialState as decksInitialState } from './decks';

export const initialState = {
  decks: decksInitialState,
};

export default combineReducers({
  decks,
});
