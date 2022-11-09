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
    top: '60%',
  },
  topheadbox: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#816481',
  },
  topheadtxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: Fonts.PlayfairDisplay700,
  },
  bottomheadbox: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#816481',
  },
  bottomheadtxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: Fonts.PlayfairDisplay400,
  },
  jewellerytxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: '#4A4A4A',
    lineHeight: 26,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  commontab: {marginLeft: 15, height: 470},
  cardbox: {paddingHorizontal: 15, paddingVertical: 40},
  cardtxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: Colors.textcolor,
    paddingBottom: 10,
  },
  backgoundimage: {
    height: 180,
    width: '100%',
    overflow: 'hidden',
  },
  backgroundimagebox: {
    position: 'absolute',
    left: -40,
    top: 21,
    width: '100%',
    flexWrap: 'wrap',
  },
  backgoundimage1: {
    height: 140,
    width: 140,
    overflow: 'hidden',
    marginTop: 10,
    marginRight: 10,
  },
  backgroundimagebox1: {
    position: 'absolute',
    left: -23,
    bottom: 10,
    width: '100%',
    flexWrap: 'wrap',
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
});
