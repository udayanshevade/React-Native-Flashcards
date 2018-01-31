import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Decks from '../Decks';
import { CreateDeckButton } from '../CreateDeck';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <CreateDeckButton navigation={navigation} />,
  })
  render() {
    const { decks, isLoading, navigation } = this.props;
    return (
      <View style={styles.main}>
        <Decks navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
});

export default Main;
