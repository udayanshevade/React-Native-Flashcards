import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    maxWidth: '100%',
    margin: 25,
    alignItems: 'center',
  },
  centered: {
    textAlign: 'center',
  },
  cardText: {
    marginLeft: 25,
    marginRight: 25,
  },
  question: {
    marginTop: 35,
    marginBottom: 30,
  },
  answer: {
    marginTop: 30,
    marginBottom: 35,
  },
  list: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  listItem: {
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#e1e8ee',
    margin: 15,
  },
});

export default styles;
