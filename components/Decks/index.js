import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Text, List, ListItem } from 'react-native-elements';
import Filter from '../Filter';
import { CreateDeckButton } from '../CreateDeck';
import { getFilteredDecks, getDecksLoading } from './selectors';
import styles from './styles';

const DeckError = () => <Text>An error occurred. Try again.</Text>;

export const DeckPreview = ({ deck, navigation }) => {
  const { title = '', questions = [] } = deck;
  const qLen = questions.length;
  return (
    <View style={styles.deckContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DeckView', {
            title,
          });
        }}
      >
        <Card title={title} containerStyle={[styles.deckCard, styles.deckCardBorders]}>
          <Text style={styles.subtitle}>{qLen} card{qLen !== 1 ? 's' : ''}</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const Decks = ({ decks, navigation }) => {
  const deckKeys = Object.keys(decks);
  return (
    <View style={styles.container}>
      {deckKeys.length
        ? (
          <List containerStyle={[styles.container, styles.list]}>
            <FlatList
              data={deckKeys.map(deckKey => decks[deckKey])}
              renderItem={({ item }) => (
                <ListItem
                  title={<DeckPreview deck={item} navigation={navigation} />}
                  hideChevron
                  containerStyle={styles.listItem}
                />
              )}
              keyExtractor={({ title }) => `${title}-deck`}
            />
          </List>
        )
        : (
          <View style={styles.container}>
            <Text h4>No decks found. Create one:</Text>
            <CreateDeckButton navigation={navigation} />
          </View>
        )
      }
    </View>
  );
};

const DecksList = ({ decks, isLoading, navigation }) => {
  if (isLoading) return <ActivityIndicator />;
  if (!decks || typeof decks !== 'object') return <DeckError />;
  return (
    <View style={styles.container}>
      <Filter />
      <Decks decks={decks} navigation={navigation} />
    </View>
  );
};

const mapStateToProps = ({ decks }) => ({
  decks: getFilteredDecks(decks),
  isLoading: getDecksLoading(decks),
});

export default connect(mapStateToProps)(DecksList);
