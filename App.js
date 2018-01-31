import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppBar from './components/AppBar';
import Main from './components/Main';
import CreateDeck from './components/CreateDeck';
import DeckView from './components/DeckView';
import store from './store';

const MainNavigator = StackNavigator({
  Home: {
    screen: Main,
  },
  Create: {
    screen: CreateDeck,
  },
  DeckView: {
    screen: DeckView,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
