import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card, Text, List, ListItem } from 'react-native-elements';
import Filter from '../Filter';
import { getFilteredDecks, getDecksLoading } from './selectors';
import styles from './styles';
import basicStyles from '../../styles';

const DeckError = () => <Text>An error occurred. Try again.</Text>;

export const DeckPreview = ({ deck, navigation }) => {
  const { title = '', questions = [] } = deck;
  const qLen = questions.length;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DeckView', {
          title,
        });
      }}
    >
      <Card
        title={title}
        titleStyle={styles.title}
        containerStyle={[
          styles.deckCard,
          styles.deckCardBorders,
          styles.deckContainer,
        ]}
      >
        <Text style={styles.subtitle}>{qLen} card{qLen !== 1 ? 's' : ''}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const Decks = ({ decks, navigation }) => {
  const deckKeys = Object.keys(decks);
  return (
    <View style={basicStyles.container}>
      {deckKeys.length
        ? (
          <List containerStyle={[basicStyles.container, styles.list]}>
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
          <View style={basicStyles.container}>
            <Text style={basicStyles.textCenter}>No decks found. Create one. Click the button above to start.</Text>
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
    <View style={basicStyles.container}>
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
