import { createSelector } from 'reselect';
import { shuffle } from '../../utils';

const getDeckQuestions = (state, { screenProps: { deckData : { questions } } }) => questions;
export const getQuizResults = ({ deck: { results } }) => results;
const getQuizFinished = ({ deck }) => deck.finished;

export const getShuffledDeckQuestions = createSelector(
  [getDeckQuestions],
  questions => shuffle([...questions])
);

export const getIncorrectQuestions = createSelector(
  [getQuizResults, getShuffledDeckQuestions],
  (results, questions) => questions.filter((b, i) => results[i] === 'incorrect')
);

export const getQuizScore = createSelector(
  [getShuffledDeckQuestions, getQuizResults],
  (questions, results) => {
    const total = questions.length;
    const answered = Object.keys(results).map(id => results[id] === 'correct');
    const answeredCorrectly = answered.filter(a => a).length;
    const score = Math.round((answeredCorrectly / total) * 100);
    return score;
  }
);
