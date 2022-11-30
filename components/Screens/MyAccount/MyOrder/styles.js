import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export const Styles = StyleSheet.create({
  dropdowncontainer: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    elevation: 5,
    zIndex: 999,
  },
  dropdownoutercontainer: {
    borderColor: 'transparent',
    width: '50%',
    backgroundColor: 'white',
    margin: 15,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  mainbox: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    elevation: 5,
  },
  innertopbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  datetxt: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
  },
  middlebox: {
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
    //   alignItems: 'center',
  },
  itemtxt: {
    marginRight: 20,
    marginBottom: 10,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
  },
  pricetxt: {
    marginRight: 20,
    marginBottom: 10,
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    color: Colors.textcolor,
  },
  orderidtxt: {
    marginRight: 10,
    marginBottom: 10,
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
    color: Colors.primarycolor,
  },
  endbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressbox: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderColor: '#FAA859',
    borderWidth: 1,
  },
  statustxt: {
    fontFamily: Fonts.Assistant700,
    fontSize: 14,
    color: Colors.textcolor,
    marginLeft: 5,
  },
});
