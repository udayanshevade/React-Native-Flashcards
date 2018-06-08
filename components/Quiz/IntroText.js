import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Icon, CheckBox, Divider } from 'react-native-elements';
import basicStyles from '../../styles';
import { isIOS } from '../../utils';

const QuizIntroText = ({
  swipeDefaultCorrect,
  setDefaultSwipeCorrect,
}) => (
  <ScrollView contentContainerStyle={styles.introTextContainer}>
    <Text h4 style={[basicStyles.title, basicStyles.textCenter]}>
      Start quiz
    </Text>
    <Divider />
    <View style={styles.textContainer}>
      <Text
        style={[basicStyles.textCenter, styles.introText]}
      >
        {'Swipe cards to the '}
      </Text>
      <Icon
        iconStyle={styles.inlineButton}
        color="#666"
        name={`gesture-swipe-${
          isIOS 
            ? 'left'
            : 'right'
        }`}
        type="material-community"
      />
      <Text
        style={[basicStyles.textCenter, styles.introText]}
      >
        {isIOS ? 'left.' : 'right.'}
      </Text>
    </View>
    <View style={styles.textContainer}>
      <Text
        style={[basicStyles.textCenter, styles.introText]}
      >
        {'Keep track of your performance with the '}
      </Text>
      <Icon
        color="#666"
        name="check"
        type="feather"
        iconStyle={styles.inlineButton}
      />
      <Text style={[basicStyles.textCenter, styles.introText]}> or </Text>
      <Icon
        color="#666"
        name="close"
        iconStyle={styles.inlineButton}
      />
      <Text style={[basicStyles.textCenter, styles.introText]}>{' controls on the card.'}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text
        style={[basicStyles.textCenter, styles.introText]}
      >
        {'Use the '}
      </Text>
      <Icon
        color="#666"
        name="flip-to-front"
        iconStyle={styles.inlineButton}
      />
      <Text style={[basicStyles.textCenter, styles.introText]}>
        {' control to flip a card.'}
      </Text>
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={{ marginLeft: 15 }}>Options:</Text>
      <CheckBox
        center
        checked={swipeDefaultCorrect}
        iconRight
        iconType={swipeDefaultCorrect ? 'feather' : 'material-community'}
        checkedIcon="check-square"
        uncheckedIcon="close-box-outline"
        uncheckedColor="red"
        onPress={() => {
          setDefaultSwipeCorrect(!swipeDefaultCorrect);
        }}
        title={`Skipping a card marks it ${swipeDefaultCorrect ? '"correct"' : '"incorrect"'}`}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  inlineButton: {
    padding: 0,
  },
  introTextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: 'white',
    padding: 15,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#40a5f5',
  },
});

export default QuizIntroText;
