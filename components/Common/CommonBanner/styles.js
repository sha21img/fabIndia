import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  imageBackground: {
    marginVertical: 15,
  },
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#903233',
  },
});
