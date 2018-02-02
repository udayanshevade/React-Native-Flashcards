import { combineReducers } from 'redux';
import decks, { initialState as decksInitialState } from './decks';
import deck, { initialState as deckInitialState } from './deck';

export const initialState = {
  decks: decksInitialState,
  deck: deckInitialState,
};

export default combineReducers({
  decks,
  deck,
});
