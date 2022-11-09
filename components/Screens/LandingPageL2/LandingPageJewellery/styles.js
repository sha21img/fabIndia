import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  videotxtbox: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
  },
  topheadbox: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  topheadtxt: {
    textAlign: 'center',
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
  },
  jewellerytxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: '#4A4A4A',
    lineHeight: 26,
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  catbox: {paddingHorizontal: 15, paddingTop: 40},
  playpatterntxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: Colors.textcolor,
  },
  scrollcont: {
    height: 290,
    flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  backgroundimagebox2: {
    height: 130,
    marginRight: 10,
    marginTop: 10,
    width: 130,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  txtbox: {
    borderRadius: 5,
    padding: 3,
    backgroundColor: 'rgba(143, 141, 139, 0.5)',
  },
  txt: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
});
