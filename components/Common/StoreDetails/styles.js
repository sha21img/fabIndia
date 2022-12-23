import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts'
import {Colors} from '../../../assets/Colors';

export const Styles = StyleSheet.create({

  imgback:{
    height: 310,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nearest: {
    fontSize: 12,
    fontFamily: Fonts.Assistant700,
    color: '#4A4A4A',
    paddingHorizontal:8
  },
  mainView :{
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  view1:{padding: 12, backgroundColor: 'white'},
  upperView: {flexDirection: 'row', alignItems: 'center'},
  txt1:{
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
    color: '#4A4A4A',
    paddingTop: 6,
  },
  txt2:{
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
    color: '#4A4A4A',
    paddingVertical: 10,
  },
  subtext: {
    fontFamily: Fonts.Assistant700,
    fontSize: 12,
    color: '#4A4A4A',
  },
  upperView2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  txt3 :{
    fontSize: 12,
    fontFamily: Fonts.Assistant400,
    color: '#4A4A4A',
    paddingHorizontal: 8,
  },
  commonbutton :{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    width: '35%',
    paddingVertical: 7,
  }

});
