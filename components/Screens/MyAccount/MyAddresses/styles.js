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
    marginVertical: 20,
  },
  mainDivText: {
    fontSize: 14,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    lineHeight: 18,
    marginBottom: 5,
  },
  headingtxt: {
    FontFamily: Fonts.Assistant600,
    fontSize: 18,
    color: Colors.textcolor,
  },
  txtbox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    lineHeight: 18,
  },
  edittxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
    paddingVertical: 5,
  },
  deletetxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    paddingVertical: 5,
    color: Colors.textcolor,
  },
  addbtntxt: {
    paddingLeft: 10,
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalbox: {
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '35%',
    right: '9%',
    zIndex:1,
    top: '35%',
  },
  headbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headtxt: {
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  head1txt: {
    fontSize: 14,
    paddingTop: 15,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
export default Styles;
