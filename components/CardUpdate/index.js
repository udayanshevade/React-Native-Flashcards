import React from 'react';
import { View, Platform } from 'react-native';
import { FormLabel, Text, FormInput, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import styles from './styles';
import basicStyles from '../../styles';

const CardUpdateForm = ({
  exitCardEdit,
  updateCard,
  isVisible,
  isEditing,
  editField,
  values: {
    question,
    answer,
    id,
  },
  deckTitle,
}) => (
  <Modal isVisible={isVisible}>
    <View style={styles.modalContainer}>
      <Text h4 style={basicStyles.title}>{`${isEditing ? 'Edit' : 'Add'} card`}</Text>
      <FormLabel>Question</FormLabel>
      <FormInput
        onChangeText={(val) => {
          editField(val, 'question');
        }}
        multiline
        value={question}
        placeholder="Enter a question"
        inputStyle={styles.input}
      />
      <FormLabel>Answer</FormLabel>
      <FormInput
        onChangeText={(val) => {
          editField(val, 'answer');
        }}
        multiline
        value={answer}
        placeholder="Enter an answer"
        inputStyle={styles.input}
      />
      <Button
        icon={{
          name: Platform.OS === 'ios' ? 'ios-create' : 'create', 
          type: Platform.OS === 'ios' ? 'ionicons' : 'materialicons',
        }}
        backgroundColor="#2096F3"
        onPress={() => {
          updateCard({
            title: deckTitle,
            id,
            question,
            answer,
          });
        }}
        title={isEditing ? 'UPDATE' : 'ADD'}
        buttonStyle={styles.button}
      />
      <Button
        onPress={exitCardEdit}
        title="cancel"
        backgroundColor="white"
        color="#2096F3"
        buttonStyle={[styles.button, styles.cancel]}
      />
    </View>
  </Modal>
);

export default CardUpdateForm;
