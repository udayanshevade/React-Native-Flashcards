import React from 'react';
import { View, Platform } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import styles from './styles';

const CardUpdateForm = ({
  closeOverlay,
  isVisible,
  editing,
  editField,
}) => (
  <Modal isVisible={isVisible}>
    <View style={styles.modalContainer}>
      <FormLabel>Question</FormLabel>
      <FormInput
        onChangeText={(val) => {
          editField({ val, field: 'question' });
        }}
        placeholder="Enter a question"
      />
      <FormLabel>Answer</FormLabel>
      <FormInput
        onChangeText={(val) => {
          editField({ val, field: 'answer' });
        }}
        placeholder="Enter an answer"
      />
      <Button
        icon={{
          name: Platform.OS === 'ios' ? 'ios-create' : 'create', 
          type: Platform.OS === 'ios' ? 'ionicons' : 'materialicons',
        }}
        backgroundColor="#2096F3"
        onPress={() => {}}
        title={editing ? 'UPDATE' : 'ADD'}
        buttonStyle={styles.button}
      />
      <Button
        onPress={closeOverlay}
        title="cancel"
        backgroundColor="white"
        color="#2096F3"
        buttonStyle={styles.button}
      />
    </View>
  </Modal>
);

export default CardUpdateForm;
