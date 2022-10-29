import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    width: width / 1.07,
    height: width / 1.07,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 10,
    padding: 20,
  },
  exploreNowBox: {
    backgroundColor: 'rgba(74,74,74,0.7)',
    padding: 10,
    borderRadius: 40,
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  exploreNowText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  headingContainer: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 16,
    fontWeight: '800',
    fontSize: 24,
    color: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    fontSize: 26,
    color: 'white',
    marginLeft: 10,
  },
});
