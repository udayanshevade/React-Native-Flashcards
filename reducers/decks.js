import immutable from 'object-path-immutable';
import * as types from '../actions/types';

export const initialState = {
  data: {
    React: {
      title: 'React',
      questions: [{
        question: 'What is React?',
        answer: 'A library for managing user interfaces.',
      }, {
        question: 'Where do you make AJAX requests in React?',
        answer: 'The componentDidMount lifecycle method.',
      }, {
        question: 'What is React?',
        answer: 'A library for managing user interfaces.',
      }, {
        question: 'Where do you make AJAX requests in React?',
        answer: 'The componentDidMount lifecycle method.',
      }, {
        question: 'What is React?',
        answer: 'A library for managing user interfaces.',
      }, {
        question: 'Where do you make AJAX requests in React?',
        answer: 'The componentDidMount lifecycle method.',
      }, {
        question: 'What is React?',
        answer: 'A library for managing user interfaces.',
      }, {
        question: 'Where do you make AJAX requests in React?',
        answer: 'The componentDidMount lifecycle method.',
      }],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      }],
    },
    Redux: {
      title: 'Redux',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      }],
    },
    Synonyms: {
      title: 'Synonyms',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      }],
    },
    Fables: {
      title: 'Fables',
      questions: [{
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      }],
    },
  },
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
