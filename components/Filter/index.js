import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { decksUpdateFilter } from '../../actions/decks';
import { getDecksFilter } from '../Decks/selectors';

const Filter = ({ decksUpdateFilter: updateFilter }) => (
  <SearchBar
    onChangeText={updateFilter}
    onClearText={() => updateFilter('')}
    clearIcon
    placeholder="Search decks"
  />
);

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { decksUpdateFilter })(Filter);
