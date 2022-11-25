import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3ECE8',
    paddingVertical: 15,
    marginTop: 20,
  },
  balanceTxt: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  amountTxt: {
    fontSize: 16,
    fontFamily: Fonts.RupeeForadian,
    color: Colors.primarycolor,
  },
  enterDeatilsView: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  enterDetailsTxt: {
    fontSize: 18,
    fontWeight: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  recipientEmailView: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  recipientEmail: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEEEC',
  },
  confirmRecipientEmailView: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  confirmRecipientEmail: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
    sborderBottomWidth: 1,
    borderBottomColor: '#EDEEEC',
  },
  chooseAmtTxt: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    paddingHorizontal: 15,
  },
  amountTxtView: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  amountTxtInnerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
    marginRight: 10,
    backgroundColor: '#EEEDE7',
  },
  buttonActive: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
    marginRight: 10,
    backgroundColor: '#750000',
  },
  amountTxt: {
    fontSize: 18,
    color: Colors.textcolor,
  },
  activeAmountTxt: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: Fonts.Assistant300,
  },
});
