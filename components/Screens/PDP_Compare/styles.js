import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  mainScrollView: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  contentContainerLeft: {
    width: '100%',
    borderRightWidth: 0.6,
    borderRightColor: '#D8D8D8',
  },
  contentContainerRight: {
    width: '100%',
    borderLeftWidth: 0.6,
    borderLeftColor: '#D8D8D8',
  },
  ProductDetails: {
    padding: 15,
  },
  crossIcon: {
    margin: 10,
    alignSelf: 'flex-end',
  },
  IconsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    top: '50%',
  },
  titleName: {
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    lineHeight: 18,
    color: Colors.textcolor,
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  heartBox: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.primarycolor,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  detailBtn: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.primarycolor,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '70%',
  },
  currBox: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  currPrice: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
    paddingRight: 7,
  },
  currDis: {
    fontFamily: Fonts.Assistant700,
    fontSize: 14,
    color: Colors.textcolor,
    paddingRight: 7,
  },
  currOff: {
    fontFamily: Fonts.Assistant700,
    fontSize: 14,
    color: '#96AD66',
    paddingRight: 7,
  },
  wholeDetails: {
    paddingHorizontal: 15,
  },
  pointsBox: {
    paddingVertical: 10,
  },
  point: {
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
    lineHeight: 20,
  },
  pointData: {
    fontFamily: Fonts.Assistant400,
    lineHeight: 20,
    fontSize: 14,
  },
  pointList: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  pointDot: {
    fontSize: 8,
    marginTop: 4,
    marginRight: 5,
  },
});
