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
  Button,
} from 'react-native-elements';
import cardStyles from './styles';
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
  flipCard = () => {
    if (this.state.value >= 90) {
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 400,
      }).start();
    } else {
      Animated.timing(this.state.animatedValue, {
        toValue: 180,
        duration: 400,
      }).start();
    }
    this.setState({
      flipped: !this.state.flipped,
    });
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
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <View style={{ flex: 0 }}>
          <Animated.View
            style={[
              styles.flipCard,
              styles.flipCardBackfaceInvisible,
              frontAnimateStyle,
            ]}
            pointerEvents={flipped ? 'none' : 'auto'}
          >
            <ScrollView>
              <Text
                h4
                style={[
                  cardStyles.cardText,
                  cardStyles.question,
                ]}
              >
                {question}
              </Text>
              <View style={styles.buttonTray}>
                <Button
                  backgroundColor="#2096F3"
                  icon={{ name: 'refresh', type: 'evilicons' }}
                  title="answer"
                  onPress={() => {
                    this.flipCard();
                  }}
                />
              </View>
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
            <ScrollView>
              <Text
                style={[
                  cardStyles.cardText,
                  cardStyles.answer,
                ]}
              >
                {answer}
              </Text>
              <View style={styles.buttonTray}>
                <Button
                  backgroundColor="#2096F3"
                  icon={{ name: 'refresh', type: 'evilicons' }}
                  title="question"
                  onPress={() => {
                    this.flipCard();
                  }}
                />
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    shadowRadius: 5,
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
  buttonTray: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default QuizCard;
