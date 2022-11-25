import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    // paddingHorizontal: 15,
  },
  stretch: {
    width: width,
    height: 250,
    // resizeMode: 'contain',
  },
  txtContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  totalBalanceTxt: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    // flex: 1,
  },
  amountTxt: {
    fontSize: 16,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  cardTxt: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  priceicon: {
    fontSize: 16,
    fontFamily: Fonts.RupeeForadian,
    color: Colors.textcolor,
  },
  historyTxt: {
    fontSize: 20,
    color: '#750000',
  },
  modalMainView: {
    marginTop: 'auto',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  viewhistorytext: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.primarycolor,
  },
  modalText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalTextTwo: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  modalTextThree: {
    fontSize: 12,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  wallettext: {
    fontSize: 14,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    // alignSelf: 'flex-start',
  },
  line: {
    height: 1,
    width: '95%',
    backgroundColor: '#EDEEEC',
  },
  viewHistory: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  modalShadow: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  transactionView: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginTop: 5,
  },
  walletCreateViewOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  historytxt: {
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    color: Colors.textcolor,
  },
  boxDimension: {
    // width: '30%',
  },
});
