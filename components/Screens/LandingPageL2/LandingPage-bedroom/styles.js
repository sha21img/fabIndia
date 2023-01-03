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
    // alignSelf: 'center',
    bottom: '10%',
    left: '15%',
    backgroundColor: '#FFFFFF',
    padding: 3,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },

  jewellerytxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: '#4A4A4A',
    lineHeight: 26,
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  commontab: {height: 450, paddingHorizontal: 15},
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
