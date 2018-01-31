import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export const CreateDeckButton = ({ navigation }) => (
  <Button
    containerViewStyle={styles.createContainer}
    buttonStyle={styles.button}
    backgroundColor="#2096F3"
    raised
    icon={{ name: 'folder-add', type: 'foundation' }}
    title="CREATE DECK"
    onPress={() => { navigation.navigate('Create'); }}
  />
);

class CreateDeck extends Component {
  static navigationOptions = {
    headerTitle: 'New Deck',
  }
  render() {
    return (
      <View>
        <Text>Create Deck</Text>
      </View>
    );
  }
}

export default CreateDeck;
