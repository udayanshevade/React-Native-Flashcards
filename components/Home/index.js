import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      buttonStyle={styles.button}
      backgroundColor="#2096F3"
      raised
      icon={{ name: 'search', type: 'octicons' }}
      title="FIND DECK"
      onPress={() => { navigation.navigate('Main'); }}
    />
    <Button
      buttonStyle={styles.button}
      backgroundColor="#FD784E"
      raised
      icon={{ name: 'folder-add', type: 'foundation' }}
      title="CREATE DECK"
      onPress={() => { navigation.navigate('Create'); }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

export default Home;
