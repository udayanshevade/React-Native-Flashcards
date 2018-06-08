import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Decks from '../Decks';
import { fetchDecksData } from '../../actions/decks';

const mapEmptyState = () => ({});

const CreateDeckLink = ({ navigation }) => (
  <Button
    containerViewStyle={styles.createContainer}
    buttonStyle={styles.button}
    backgroundColor="#2096F3"
    raised
    icon={{
      name: 'folder-add',
      type: 'foundation',
    }}
    title="CREATE DECK"
    onPress={() => {
      navigation.navigate('Create');
    }}
  />
);

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <CreateDeckLink navigation={navigation} />,
  })
  componentDidMount() {
    this.props.getDecks()
      .then(() => {
        console.log('decks fetched');
      });
  }
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
  createContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    flex: 1,
  },
});

export default connect(mapEmptyState, {
  getDecks: fetchDecksData,
})(Main);
