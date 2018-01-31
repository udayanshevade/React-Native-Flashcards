import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  Text,
  Card,
  Button,
} from 'react-native-elements';
import FlipCard from 'react-native-flip-card';
import cardStyles from './styles';
import basicStyles from '../../styles';

class QuizCard extends Component {
  state = {
    flipped: false,
  }
  setCardFlipped = (flipped) => {
    this.setState({
      flipped,
    });
  }
  render() {
    const {
      cardData: { question, answer },
    } = this.props;
    const { flipped } = this.state;
    return (
      <View style={basicStyles.container}>
        {!flipped &&
          <Card
            containerStyle={[
              cardStyles.card,
              styles.card
            ]}
            wrapperStyle={[
              styles.cardContainer,
              basicStyles.container,
            ]}
          >
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
                buttonStyle={styles.button}
                backgroundColor="#2096F3"
                icon={{ name: 'refresh', type: 'evilicons' }}
                title="answer"
                onPress={() => {
                  this.setCardFlipped(true);
                }}
              />
            </View>
          </Card>
        }
        {flipped &&
          <Card
            containerStyle={[
              cardStyles.card,
              styles.card,
            ]}
            wrapperStyle={[
              styles.cardContainer,
              basicStyles.container,
            ]}
          >
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
                buttonStyle={styles.button}
                backgroundColor="#2096F3"
                icon={{ name: 'refresh', type: 'evilicons' }}
                title="question"
                onPress={() => {
                  this.setCardFlipped(false);
                }}
              />
            </View>
          </Card>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: 250,
    maxWidth: '100%',
  },
  buttonTray: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default QuizCard;
