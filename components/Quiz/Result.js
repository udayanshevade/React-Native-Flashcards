import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Cards from '../Cards';
import styles from './styles';

const Result = ({ score, deckData }) => (
  <ScrollView>
    <Text style={styles.scoreText}>You scored:</Text>
    <Text h2 style={styles.scoreText}>{score}%</Text>
    <Text h5 style={styles.scoreText}>
      {
        !!deckData.questions.length
          ? 'Looks like you could use a little review:'
          : 'Excellent!'
      }
    </Text>
    {!!deckData.questions.length &&
      <Cards deckData={deckData} />
    }
  </ScrollView>
);

export default Result;
