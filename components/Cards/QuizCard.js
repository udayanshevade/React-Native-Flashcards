import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {
  Text,
  Card,
  Icon
} from 'react-native-elements';
import cardStyles from './styles';
import quizStyles from '../Quiz/styles';
import basicStyles from '../../styles';
import { itemWidth, itemHeight } from '../../utils';

class QuizCard extends Component {
  state = {
    flipped: false,
    value: 0,
    animatedValue: new Animated.Value(0),
  }
  componentWillMount() {
    this.state.animatedValue.addListener(({ value }) => {
      this.setState({
        value,
      });
    });
    this.frontFlip = this.state.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backFlip = this.state.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    this.frontOpacity = this.state.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0],
    });
    this.backOpacity = this.state.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1],
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.active && !nextProps.active && this.state.flipped) {
      this.flipCard();
    }
  }
  invertFlipState = () => {
    this.setState({
      flipped: !this.state.flipped,
    });
  }
  flipCard = () => {
    if (this.state.value >= 90) {
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 400,
      }).start(this.invertFlipState);
    } else {
      Animated.timing(this.state.animatedValue, {
        toValue: 180,
        duration: 400,
      }).start(this.invertFlipState);
    }
  }
  renderButtonTray = () => {
    const { result } = this.props;
    const correct = result === 'correct';
    const incorrect = result === 'incorrect';
    return (
      <View style={quizStyles.buttonTray}>
        <Icon
          color={correct ? 'green' : '#efefef'}
          onPress={() => {
            this.props.setQuestionCorrect('correct');
          }}
          title="correct"
          name="check"
          type="feather"
        />
        <Icon
          color="#2096F3"
          name={`flip-to-${this.state.flipped ? 'front' : 'back'}`}
          onPress={() => {
            this.flipCard();
          }}
        />
        <Icon
          color={incorrect ? 'red' : '#efefef'}
          onPress={() => {
            this.props.setQuestionCorrect('incorrect');
          }}
          name="close"
        />
      </View>
    );
  }
  render() {
    const frontAnimateStyle = {
      transform: [{
        rotateY: this.frontFlip,
      }],
      opacity: this.frontOpacity,
    };
    const backAnimateStyle = {
      transform: [{
        rotateY: this.backFlip,
      }],
      opacity: this.backOpacity,
    };
    const {
      cardData: { question, answer },
    } = this.props;
    const { flipped } = this.state;
    const buttonTray = this.renderButtonTray();
    return (
      <View style={styles.outerContainer}>
        <View style={styles.outerContainer}>
          <Animated.View
            style={[
              styles.flipCard,
              styles.flipCardBackfaceInvisible,
              frontAnimateStyle,
            ]}
            pointerEvents={flipped ? 'none' : 'auto'}
          >
            <ScrollView contentContainerStyle={styles.innerContainer}>
              <Text
                h4
                style={[
                  cardStyles.cardText,
                  cardStyles.question,
                ]}
              >
                {question}
              </Text>
              {buttonTray}
            </ScrollView>
          </Animated.View>
          <Animated.View
            style={[
              backAnimateStyle,
              styles.flipCard,
              styles.flipCardBackfaceInvisible,
              styles.flipCardBack,
            ]}
            pointerEvents={!flipped ? 'none' : 'auto'}
          >
            <ScrollView contentContainerStyle={styles.innerContainer}>
              <Text
                style={[
                  cardStyles.cardText,
                  cardStyles.answer,
                ]}
              >
                {answer}
              </Text>
              {buttonTray}
            </ScrollView>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flipCard: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowRadius: 5,
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
});

export default QuizCard;
