import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckContainer: {
    alignItems: 'center',
    elevation: 1,
  },
  list: {
    borderTopWidth: 0,
  },
  listItem: {
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckCard: {
    minWidth: 320,
    maxWidth: '100%',
  },
  deckCardBorders: {
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default styles;
