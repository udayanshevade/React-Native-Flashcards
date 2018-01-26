import { createSelector } from 'reselect';
import { fuzzyMatch } from '../../utils';

export const getDecks = ({ data }) => data;
export const getDecksFilter = ({ filter }) => filter;
export const getDecksLoading = ({ isLoading }) => isLoading;

export const getFilteredDecks = createSelector(
  [getDecks, getDecksFilter],
  (decks, filter) => {
    let filteredDecks = [];
    if (decks) {
      const deckKeys = Object.keys(decks);
      if (filter) {
        filteredDecks = deckKeys
          .filter(k => fuzzyMatch(k.toLowerCase(), filter.toLowerCase()))
          .map(k => decks[k]);
      } else {
        filteredDecks = deckKeys.map(k => decks[k]);
      }
    }
    return filteredDecks;
  }
);
