import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Quiz from '../Quiz';
import Deck from '../Deck';
import { deckResetQuiz } from '../../actions/deck';
import { getSelectedDeck } from '../Decks/selectors';
import styles from '../../styles';

const DeckModes = TabNavigator({
  Quiz: {
    screen: Quiz,
    tabBarLabel: 'Quiz',
  },
  Deck: {
    screen: Deck,
    tabBarLabel: 'Deck',
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#303337',
    },
    indicatorStyle: {
      backgroundColor: '#e1e8ee',
    },
  },
  swipeEnabled: false,
});

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })
  componentWillUnmount() {
    this.props.resetQuiz();
  }
  render() {
    const { deckData } = this.props;
    return (
      <View style={styles.container}>
        <DeckModes screenProps={{ deckData }} />
      </View>
    );
  }
}

const mapStateToProps = ({ decks, deck }, props) => ({
  deckData: getSelectedDeck(
    decks.data, 
    props.navigation.state.params.title,
  ),
  testing: deck.testing,
});

export default connect(mapStateToProps, {
  resetQuiz: deckResetQuiz,
})(DeckView);
