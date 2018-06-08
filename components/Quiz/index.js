import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Quiz from './Quiz';
import QuizIntroText from './IntroText';
import Result from './Result';
import CompletionBar from '../CompletionBar';
import {
  deckSetTesting,
  deckQuizSetActiveSlide,
  deckQuizSetQuestionCorrect,
  deckEmptyResults,
  deckResetQuiz,
  deckSetQuizFinished,
  deckSetQuizDefaultSwipeCorrect,
  deckSetCarouselInitialized,
} from '../../actions/deck';
import {
  getShuffledDeckQuestions,
  getQuizResults,
  getQuizScore,
  getIncorrectQuestions,
} from './selectors';
import basicStyles from '../../styles';
import styles from './styles';

const Placeholder = () => (
  <View>
    <Text h5 style={[basicStyles.title, basicStyles.textCenter]}>
      You haven't added any cards to this deck.
    </Text>
    <Text h5 style={[basicStyles.title, basicStyles.textCenter]}>
      Manage your deck in the 'Deck' tab.
    </Text>
  </View>
);

class QuizContainer extends Component {
  componentDidMount() {
    const lastSlide = this.props.questions.length - 1;
    this.props.setActiveSlide(lastSlide);
  }
  componentWillUnmount() {
    this.props.resetQuiz();
  }
  render() {
    const {
      questions,
      score,
      results,
      testing,
      setTesting,
      activeSlide,
      setActiveSlide,
      setQuestionCorrect,
      setQuizFinished,
      resetQuiz,
      emptyResults,
      finished,
      swipeDefaultCorrect,
      isInitialized,
      setIsInitialized,
      setDefaultSwipeCorrect,
      screenProps,
      incorrectQuestions,
    } = this.props;
    const totalSlides = questions.length;
    if (!totalSlides) {
      return <Placeholder />;
    }
    let buttonTitle = 'Start';
    if (testing) {
      if (activeSlide) {
        // if user wants to quit quiz mode
        buttonTitle = 'Quit';
      } else if (!finished) {
        // to end quiz on final slide
        buttonTitle = 'Done';
      } else {
        // to exit finished quiz mode
        buttonTitle = 'Finish';
      }
    }
    const isCorrect = swipeDefaultCorrect ? 'correct' : 'incorrect';
    const handleQuitPress = () => {
      const toggleTesting = !testing || (testing && (activeSlide || finished));
      if (toggleTesting) {
        setTesting(!testing);
      }
      if (testing && !activeSlide && !finished) {
        if (!results[0]) {
          setQuestionCorrect(0, isCorrect);
        }
        setQuizFinished(true);
      } else if (testing && finished) {
        setQuizFinished(false);
        resetQuiz();
      } else if (testing) {
        resetQuiz();
      }
    };
    const notTesting = !testing || !activeSlide;
    return (
      <View style={basicStyles.container}>
        {!testing &&
          <QuizIntroText
            swipeDefaultCorrect={swipeDefaultCorrect}
            setDefaultSwipeCorrect={setDefaultSwipeCorrect}
          />
        }
        {testing && !finished &&
          <CompletionBar
            min={0}
            max={questions.length}
            current={questions.length - activeSlide}
            style={styles.completionBar}
          />
        }
        {testing && !finished &&
          <Quiz
            questions={questions}
            results={results}
            setActiveSlide={setActiveSlide}
            activeSlide={activeSlide}
            setQuestionCorrect={setQuestionCorrect}
            resetQuiz={resetQuiz}
            restart={emptyResults}
            onQuitPress={handleQuitPress}
            isCorrect={isCorrect}
            setQuizFinished={setQuizFinished}
            setIsInitialized={setIsInitialized}
          />
        }
        {testing && finished &&
          <Result
            deckData={{
              title: screenProps.deckData.title,
              questions: incorrectQuestions,
            }}
            score={score}
          />
        }
        <Button
          backgroundColor={notTesting ? '#2096f3' : 'white'}
          color={notTesting ? 'white' : '#2096f3'}
          onPress={handleQuitPress}
          title={buttonTitle}
          buttonStyle={basicStyles.button}
          disabled={testing && !isInitialized}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  testing: state.deck.testing,
  finished: state.deck.finished,
  activeSlide: state.deck.activeSlide,
  isInitialized: state.deck.isInitialized,
  swipeDefaultCorrect: state.deck.swipeDefaultCorrect,
  questions: getShuffledDeckQuestions(state, props),
  incorrectQuestions: getIncorrectQuestions(state, props),
  results: getQuizResults(state),
  score: getQuizScore(state, props),
});

export default connect(mapStateToProps, {
  setTesting: deckSetTesting,
  setActiveSlide: deckQuizSetActiveSlide,
  setQuestionCorrect: deckQuizSetQuestionCorrect,
  setQuizFinished: deckSetQuizFinished,
  emptyResults: deckEmptyResults,
  resetQuiz: deckResetQuiz,
  setDefaultSwipeCorrect: deckSetQuizDefaultSwipeCorrect,
  setIsInitialized: deckSetCarouselInitialized,
})(QuizContainer);
