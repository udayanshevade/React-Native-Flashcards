import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  createContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 10,
  },
  titleHeading: {
    textAlign: 'center',
    fontSize: 18,
  },
  inputContainerStyle: {
    alignSelf: 'center',
  },
  titleInputStyle: {
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  headerStyle: {
    alignSelf: 'center',
  },
});

export default styles;
