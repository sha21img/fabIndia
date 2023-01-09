import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

const Styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 10,
    backgroundColor: 'white',
  },
  offerTextContainer: {
    backgroundColor: '#F3ECE8',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  offerText1: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
  },
  offerText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
  cartContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  imagedimension: {
    height: 170,
    width: '35%',
  },
  detailContainer: {
    width: '65%',
    paddingLeft: 10,
  },
  title: {
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
  },
  colorBox: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  colorText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
  },
  sizeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 7,
  },
  quantityContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  currencyContainer: {
    flexDirection: 'row',
  },
  curr: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
  },
  curr1: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    paddingLeft: 10,
  },
  saveText: {
    color: '#96AD66',
    fontFamily: Fonts.Assistant700,
    paddingVertical: 5,
    fontSize: 12,
  },
  typeText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: '#903233',
  },
  btnContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#FAFAFA',
    justifyContent:'center'
  },
  btn: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: 14,
    fontFamily: Fonts.Assistant600,
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#EDEDED',
  },
  sizeText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
  },
  QuantityText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
  },
});
export default Styles;
