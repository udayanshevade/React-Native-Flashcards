import { combineReducers } from 'redux';
import decks, { initialState as decksInitialState } from './decks';
import deck, { initialState as deckInitialState } from './deck';
import create, { initialState as createInitialState } from './create';

export const initialState = {
  decks: decksInitialState,
  deck: deckInitialState,
  create: createInitialState,
};

export default combineReducers({
  decks,
  deck,
  create,
});
