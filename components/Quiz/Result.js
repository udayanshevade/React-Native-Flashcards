import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Cards from '../Cards';
import styles from './styles';

class Result extends Component {
  render() {
    const { score, deckData } = this.props;
    return (
      <ScrollView>
        <Text style={styles.titleText}>You scored:</Text>
        <Text h2 style={[styles.titleText]}>
          {score}%
        </Text>
        <Text h5 style={styles.titleText}>
          {
            !!deckData.questions.length
              ? 'Looks like you could use a little review:'
              : 'Excellent work!'
          }
        </Text>
        {!!deckData.questions.length &&
          <Cards deckData={deckData} />
        }
      </ScrollView>
    );
  }
}

export default Result;
