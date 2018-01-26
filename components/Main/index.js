import React, { Component } from 'react';
import { View } from 'react-native';
import Filter from '../Filter';
import Decks from '../Decks';

const Main = ({ decks, isLoading }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
    <Filter />
    <Decks />
  </View>
);

export default Main;
