import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export default Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  noProductText: {
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    color: Colors.textcolor,
    margin: 15,
  },
  cardContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 7,
  },
  orderDate: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
  },
  textContainerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
  },
  title1: {
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
    color: Colors.primarycolor,
  },
  title2: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    paddingHorizontal: 7,
    color: Colors.textcolor,
  },
  line: {
    borderRightColor: '#EDEDED',
    marginHorizontal: 7,
    height: 10,
    borderRightWidth: 1,
  },
  pendingText: {
    paddingTop: 2,
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: '#FAA859',
  },
});
