import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, List, ListItem, Icon } from 'react-native-elements';
import { getFilteredDecks, getDecksLoading } from './selectors';

export const Deck = ({ deck }) => {
  const { title = '', questions = [] } = deck;
  return (
    <View style={styles.deckContainer}>
      <Card title={title}>
        <Text style={styles.subtitle}>{questions.length} cards</Text>
      </Card>
    </View>
  );
};

const Decks = ({ decks, isLoading }) => {
  if (isLoading) return <ActivityIndicator />;
  if (!decks || typeof decks !== 'object') return <Text>An error occurred. Try again.</Text>;
  const deckKeys = Object.keys(decks);
  if (!deckKeys.length) {
    return (
      <Card>
        <Icon type="foundation" name="folder-add" />
        <Text>Create a deck</Text>
      </Card>
    );
  }
  return (
    <View style={styles.container}>
      {deckKeys.map(deckKey => (
        <Deck deck={decks[deckKey]} key={`${deckKey}-deck`} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  deckContainer: {
    minWidth: '100%',
    minHeight: 100,
  },
  subtitle: {
    textAlign: 'center',
  },
});

const mapStateToProps = ({ decks }) => ({
  decks: getFilteredDecks(decks),
  isLoading: getDecksLoading(decks),
});

export default connect(mapStateToProps)(Decks);
