import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Quiz from './Quiz';
import { deckSetTesting, deckQuizSetActiveSlide } from '../../actions/deck';
import basicStyles from '../../styles';

const QuizContainer = ({
  screenProps,
  testing,
  setTesting,
  activeSlide,
  setActiveSlide,
}) => {
  const { deckData } = screenProps;
  const { questions } = deckData;
  const totalSlides = questions.length;
  return (
    <View style={basicStyles.container}>
      <Text h4 style={[basicStyles.title, basicStyles.textCenter]}>
        {testing ? `${totalSlides - activeSlide} / ${totalSlides}` : 'Start quiz'}
      </Text>
      {testing &&
        <Quiz
          questions={questions}
          setActiveSlide={setActiveSlide}
          activeSlide={activeSlide}
        />
      }
      <Button
        backgroundColor={testing ? 'white' : '#2096f3'}
        color={testing ? '#2096f3' : 'white'}
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
  activeSlide: deck.activeSlide,
});

export default connect(mapStateToProps, {
  setTesting: deckSetTesting,
  setActiveSlide: deckQuizSetActiveSlide,
})(QuizContainer);
