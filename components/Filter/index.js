import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { decksUpdateFilter } from '../../actions/decks';
import { getDecksFilter } from '../Decks/selectors';

class Filter extends Component {
  componentDidMount() {
    this.search.focus();
  }
  updateFilter = (e) => {
    this.props.decksUpdateFilter(e);
  }
  render() {
    return (
      <SearchBar
        ref={(search) => { this.search = search; }}
        onChangeText={this.updateFilter}
        onClearText={() => this.updateFilter('')}
        placeholder="Search decks"
      />
    );
  }
};

const mapStateToProps = ({ decks }) => ({
  filter: getDecksFilter(decks),
});

export default connect(mapStateToProps, { decksUpdateFilter })(Filter);
