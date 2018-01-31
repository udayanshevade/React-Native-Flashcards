import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  Text,
  FormInput,
  FormLabel,
  Button,
} from 'react-native-elements';
import CardsList from '../Cards';
import CardUpdate from '../CardUpdate';
import styles from '../../styles';

class Deck extends Component {
  state = {
    overlayVisible: false,
    editing: false,
    id: null,
    question: '',
    answer: '',
  }
  setOverlayVisibility = (overlayVisible) => {
    this.setState({
      overlayVisible,
    });
  }
  editField = ({ field, val }) => {
    this.setState({
      [field]: val,
    });
  }
  clearFields = () => {
    this.setState({
      id: null,
      question: '',
      answer: '',
      editing: false,
    });
  }
  render() {
    const { screenProps : { deckData } } = this.props;
    const { overlayVisible, editing, id, question, answer } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Button
          backgroundColor="#2096F3"
          onPress={() => {
            this.setOverlayVisibility(true);
          }}
          title="Add card"
          buttonStyle={styles.button}
        />
        <CardsList
          deckData={deckData}
          handleCardButtonPress={() => {
            this.setOverlayVisibility(!overlayVisible);
          }}
        />
        <CardUpdate
          isVisible={overlayVisible}
          editing={editing}
          editField={this.editField}
          closeOverlay={() => {
            this.setOverlayVisibility(false);
            this.clearFields();
          }}
        />
      </ScrollView>
    );
  }
}

export default Deck;
