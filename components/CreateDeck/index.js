import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Platform } from 'react-native';
import {
  Button,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import Cancel from './Cancel';
import CardsList from '../Cards';
import CardUpdate from '../CardUpdate';
import {
  createSetTitle,
  createSetIsEditing,
  createEditCardValue,
  createSetIsOverlayVisible,
  createClearEditValues,
  createAddQuestion,
  createDeckNew,
  createReset,
} from '../../actions/create';
import styles from './styles';

class CreateDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create deck',
    headerTitleStyle: styles.headerStyle,
    headerRight: <Cancel navigation={navigation} />,
  })
  render() {
    const {
      title,
      changeTitleInput,
      questions,
      overlayVisible,
      isEditing,
      clearFields,
      setIsEditing,
      setOverlayVisible,
      addCard,
      editValues,
      editField,
      createDeck,
      reset,
      navigation,
    } = this.props;
    return (
      <ScrollView>
        <View style={styles.titleContainer}>
          <FormInput
            ref={(input) => { this.title = input; }}
            value={title}
            onChangeText={changeTitleInput}
            placeholder="Give it a topic"
            inputStyle={styles.titleInputStyle}
            containerStyle={styles.inputContainerStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerViewStyle={styles.createContainer}
            buttonStyle={styles.button}
            backgroundColor="#2096F3"
            raised
            icon={{
              name: Platform.OS === 'ios' ? 'ios-create' : 'create', 
              type: Platform.OS === 'ios' ? 'ionicons' : 'materialicons',
            }}
            title="ADD CARD"
            onPress={() => {
              setIsEditing(false);
              editField(questions.length, 'id');
              setOverlayVisible(true);
            }}
          />
          <Button
            containerViewStyle={styles.createContainer}
            color="#2096F3"
            backgroundColor="transparent"
            icon={{
              name: 'folder-add',
              type: 'foundation',
              color: '#2096F3',
            }}
            title="Create Deck"
            onPress={() => {
              if (title && title.length) {
                createDeck({
                  title,
                  questions,
                });
                reset();
                navigation.navigate('DeckView', { title });
              } else {
                this.title.shake();
              }
            }}
          />
        </View>
        {!!questions.length &&
          <CardsList
              deckData={{
                title,
                questions,
              }}
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
        }
        <CardUpdate
          deckTitle={title}
          isVisible={overlayVisible}
          isEditing={isEditing}
          editField={editField}
          exitCardEdit={() => {
            setOverlayVisible(false);
            clearFields();
          }}
          updateCard={(data) => {
            console.log(data);
            addCard(data);
            setOverlayVisible(false);
            clearFields();
          }}
          values={editValues}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({
  create: {
    title,
    cardEditForm: editValues,
    questions,
    isEditing,
    isOverlayVisible: overlayVisible,
  },
}) => ({
  title,
  editValues,
  questions,
  isEditing,
  overlayVisible,
});

export default connect(mapStateToProps, {
  changeTitleInput: createSetTitle,
  editField: createEditCardValue,
  setIsEditing: createSetIsEditing,
  setOverlayVisible: createSetIsOverlayVisible,
  clearFields: createClearEditValues,
  addCard: createAddQuestion,
  createDeck: createDeckNew,
  reset: createReset,
})(CreateDeck);
