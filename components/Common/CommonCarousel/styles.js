import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: width / 1.07,
    height: width / 1.07,
    resizeMode: 'cover',
  },
  exploreNowBox: {
    backgroundColor: 'rgba(74,74,74,0.7)',
    position: 'absolute',
    padding: 10,
    left: 35,
    bottom: 35,
    borderRadius: 40,
  },
  exploreNowText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  headingContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 35,
    left: 35,
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
