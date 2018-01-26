import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Filter from '../Filter';
import Decks from '../Decks';

const Main = ({ decks, isLoading }) => (
  <View style={styles.main}>
    <Filter />
    <Decks />
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});

export default Main;
