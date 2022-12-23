import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const Styles = StyleSheet.create({
  container:{flexGrow: 1, backgroundColor: '#FFFFFF'},
  imgback:{
    height: 310,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurbox :{
    backgroundColor: 'rgba(144, 50, 51, 0.54)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '70%',
  },
  blurtxt:{
    color: '#fff',
    textAlign: 'center',
    width: '90%',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: Fonts.Assistant700,
  },
  secondDiv:  {
    height: 92,
    backgroundColor: '#F3ECE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondtxt:  {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.Assistant600,
    marginVertical: 12,
    marginHorizontal: 15,
    color:'#4A4A4A',
  },
  nearest: {
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: '#4A4A4A',
  },
  mainView :{
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    elevation: 3,
    borderRadius: 60,
    fontSize: 14,
    paddingHorizontal: 20,
    marginVertical: 16,
    width: '80%',
  },
  locView: {flexDirection: 'row', alignItems: 'center'},
  loctxt: {color: '#903233',fontSize:16,fontFamily:Fonts.Assistant400},

 
});
export default Styles;
