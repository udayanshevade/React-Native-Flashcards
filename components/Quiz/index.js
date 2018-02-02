import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Quiz from './Quiz';
import { deckSetTesting } from '../../actions/deck';
import basicStyles from '../../styles';

const QuizContainer = ({ screenProps, testing, setTesting }) => {
  const { deckData } = screenProps;
  const { questions } = deckData;
  return (
    <View style={basicStyles.container}>
      {testing
        ? <Quiz questions={questions} />
        : <Text h4 style={[basicStyles.title, basicStyles.textCenter]}>
            Start quiz
          </Text>
      }
      <Button
        backgroundColor={testing ? 'white' : '#2096F3'}
        color={testing ? '#2096F3' : 'white'}
        onPress={() => {
          setTesting(!testing);
        }}
        title={testing ? 'Quit' : 'Start'}
        buttonStyle={basicStyles.button}
      />
    </View>
  );
};

const mapStateToProps = ({ deck }) => ({
  testing: deck.testing,
});

export default connect(mapStateToProps, {
  setTesting: deckSetTesting,
})(QuizContainer);
