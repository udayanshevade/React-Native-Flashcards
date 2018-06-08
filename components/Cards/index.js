import React from 'react';
import { View, FlatList } from 'react-native';
import {
  Text,
  Card,
  List,
  ListItem,
  Divider,
  Button,
  Icon,
} from 'react-native-elements';
import styles from './styles';

export const CardPreview = ({ index, cardData, handleClose, handleButtonPress }) => (
  <Card style={styles.card}>
    {handleClose &&
      <Icon
        name="close-circle-outline"
        color="#2096f3"
        type="material-community"
        iconStyle={styles.closeIcon}
        onPress={() => {
          handleClose();
        }}
      />
    }
    <Text h4 style={[styles.cardText, styles.question]}>{cardData.question}</Text>
    <Divider style={styles.divider} />
    <Text style={[styles.cardText, styles.answer]}>{cardData.answer}</Text>
    {handleButtonPress &&
      <Button
        backgroundColor="#2096F3"
        icon={{ name: 'edit', type: 'feather' }}
        title="edit"
        onPress={() => {
          handleButtonPress(cardData, index);
        }}
      />
    }
  </Card>
);

const CardsList = ({ deckData, handleClose, handleCardButtonPress }) => (
  <View style={styles.main}>
    {
      deckData && deckData.questions && deckData.questions.length
      ? <List containerStyle={[styles.main, styles.list]}>
          <FlatList
            data={deckData.questions}
            renderItem={({ item, index }) => (
              <ListItem
                title={
                  <CardPreview
                    cardData={item}
                    index={index}
                    handleClose={handleClose}
                    handleButtonPress={handleCardButtonPress}
                  />
                }
                hideChevron
                containerStyle={styles.listItem}
              />
            )}
            keyExtractor={val => `${deckData.title}-${val.question}-card`}
          />
        </List>
      : <View>
          <Text style={styles.centered}>No cards yet.</Text>
        </View>
    }
  </View>
);

export default CardsList;
