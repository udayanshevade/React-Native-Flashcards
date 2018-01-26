import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import AppBar from './components/AppBar';
import Main from './components/Main';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppBar />
          <Main />
        </View>
      </Provider>
    );
  }
}
