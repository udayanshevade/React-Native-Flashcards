import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import {
  FormInput,
  FormLabel,
  Button,
} from 'react-native-elements';
import CardsList from '../Cards';
import CardUpdate from '../CardUpdate';
import {
  deckSetEditOverlayVisible,
  deckSetIsEditingCard,
  deckEditCardValue,
  deckClearEditValues,
  deckUpdateCard,
} from '../../actions/deck';
import styles from '../../styles';

const Deck = ({
  screenProps : { deckData },
  isEditing,
  setIsEditing,
  setOverlayVisible,
  clearFields,
  editField,
  editValues,
  overlayVisible,
  updateCard,
}) => (
  <ScrollView style={styles.container}>
    {deckData && (
      <Text
        style={[
          styles.textCenter,
          {
            marginTop: 10,
            marginBottom: 10
          },
        ]}
      >
        {deckData.questions.length} cards
      </Text>
    )}
    <Button
      backgroundColor="#2096F3"
      onPress={() => {
        setIsEditing(false);
        editField(deckData.questions.length, 'id');
        setOverlayVisible(true);
      }}
      title="Add card"
      buttonStyle={styles.button}
    />
    <CardsList
      deckData={deckData}
      handleClose={() => {
        console.log('opening close confirm dialog');
      }}
      handleCardButtonPress={(cardData, id) => {
        setIsEditing(true);
        editField(id, 'id');
        Object.keys(cardData).forEach((field) => {
          editField(cardData[field], field);
        })
        setOverlayVisible(true);
      }}
    />
    <CardUpdate
      deckTitle={deckData.title}
      isVisible={overlayVisible}
      isEditing={isEditing}
      editField={editField}
      exitCardEdit={() => {
        setOverlayVisible(false);
        clearFields();
      }}
      updateCard={(data) => {
        updateCard(data);
        setOverlayVisible(false);
        clearFields();
      }}
      values={editValues}
    />
  </ScrollView>
);

const mapStateToProps = ({ deck }, { screenProps: { deckData } }) => ({
  editValues: deck.cardEditForm,
  isEditing: deck.isEditing,
  overlayVisible: deck.isEditVisible,
});

export default connect(mapStateToProps, {
  setOverlayVisible: deckSetEditOverlayVisible,
  setIsEditing: deckSetIsEditingCard,
  editField: deckEditCardValue,
  clearFields: deckClearEditValues,
  updateCard: deckUpdateCard,
})(Deck);
