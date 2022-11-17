import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 20,
  },
  chargeDetails: {
    flex: 1,
    alignItems: 'center',
  },
  chargeDetailsText: {
    // color: Colors.mainTextColor,
    // fontFamily: Fonts.nunitoBold,
    fontSize: 22,
    fontWeight: 'bold',
  },
  locationIcon: {
    height: 8,
    width: 8,
  },
  carIcon: {
    width: '75%',
    maxWidth: 400,
    height: 170,
    alignSelf: 'center',
  },
  body: {
    // flex: 1,
    // marginHorizontal: 18,
    marginVertical: 20,
    // paddingVertical: 10,
    // shadowColor: Colors.darkBlue,
    // shadowOffset: {
    //   width: 50,
    //   height: 50
    // },
    // shadowOpacity: 1,
    // shadowRadius: 25,
    // elevation: 10,
    // justifyContent: 'space-between'
  },
  div: {
    marginVertical: 9,
    // backgroundColor: Colors.mainThemeColor,
    borderRadius: 15,
    paddingVertical: 18,
    paddingLeft: 0,
    paddingRight: 25,
    flexDirection: 'row',
  },
  divIcon: {
    height: 60,
    width: 60,
  },
  mainDivText: {
    // fontFamily: Fonts.openSansRegular,
    fontSize: 14,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    lineHeight: 18,
    marginBottom: 5,
  },
  titletxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    lineHeight: 18,
  },
  secondaryDivText: {
    // color: Colors.black,
    // fontFamily: Fonts.openSansSemiBold,
    fontSize: 12,
    marginTop: 5,
  },
  greenDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    // backgroundColor: Colors.primaryButton,
  },
  notActiveDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 1.3,
    // borderColor: Colors.primaryButton,
    backgroundColor: 'transparent',
  },
  straightLine: {
    height: 0.5,
    width: '100%',
    // backgroundColor: Colors.white,
  },
  cntnBtn: {
    width: '100%',
    // backgroundColor: Colors.white,
    borderRadius: 50,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  continueText: {
    // color: Colors.lightBlue,
    // fontFamily: Fonts.openSansRegular,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default Styles;
