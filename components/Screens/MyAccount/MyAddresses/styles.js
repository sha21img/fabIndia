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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    elevation: 5,
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    lineHeight: 18,
  },
  modalbox: {
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 5,
    top: '40%',
    right: '8%',
    padding: 15,
    width: '35%',
    borderRadius: 5,
  },
  edittxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
  },
  deletetxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
    marginTop: 10,
  },
  addbtntxt: {
    paddingLeft: 10,
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  modalcontainer: {flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'},
  modalbox: {
    marginTop: 'auto',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 15,
    paddingHorizontal: 15,
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
