import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    height: 480,
    backgroundColor: Colors.backgroundColor,
  },
  containerBox: {
    backgroundColor: '#F8F2EF',
    height: 300,
    paddingTop: 30,
    paddingBottom: 20,
    position: 'relative',
  },
  cardContainer: {
    position: 'absolute',
    bottom: -165,
  },
  card: {
    width: 218,
    marginLeft: 15,
    elevation: 1,
  },
  cardBox: {
    position: 'absolute',
    bottom: 5,
    height: 67,
    width: '100%',
  },
  boxText: {
    marginVertical: 5,
    fontSize: 16,
    lineHeight: 21,
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: '#ffffff',
    fontFamily: Fonts.Assistant400,
  },
  ScrollContainer: {
    height: 380,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
