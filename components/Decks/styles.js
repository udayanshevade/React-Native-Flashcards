import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  deckContainer: {
    elevation: 1,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
    borderRadius: 5,
  },
  subtitle: {
    textAlign: 'center',
  },
  emptyText: {
    margin: 25,
    fontSize: 16,
  },
});

export default styles;
