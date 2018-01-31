import React from 'react';
import { View, FlatList } from 'react-native';
import {
  Text,
  Card,
  List,
  ListItem,
  Divider,
  Button,
} from 'react-native-elements';
import styles from './styles';

export const CardPreview = ({ cardData: { question, answer }, handleButtonPress }) => (
  <Card style={styles.card}>
    <Text h4 style={[styles.cardText, styles.question]}>{question}</Text>
    <Divider style={styles.divider} />
    <Text style={[styles.cardText, styles.answer]}>{answer}</Text>
    <Button
      backgroundColor="#2096F3"
      icon={{ name: 'edit', type: 'feather' }}
      title="edit"
      onPress={handleButtonPress}
    />
  </Card>
);

const CardsList = ({ deckData, handleCardButtonPress }) => (
  <View style={styles.main}>
    <List containerStyle={[styles.main, styles.list]}>
      <FlatList
        data={deckData.questions}
        renderItem={({ item }) => (
          <ListItem
            title={
              <CardPreview
                cardData={item}
                handleButtonPress={handleCardButtonPress}
              />
            }
            hideChevron
            containerStyle={styles.listItem}
          />
        )}
        keyExtractor={(val, i) => `${deckData.title}-${i}-card`}
      />
    </List>
  </View>
);

export default CardsList;
