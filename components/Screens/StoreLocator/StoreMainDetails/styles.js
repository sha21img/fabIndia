import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts'
import {Colors} from '../../../../assets/Colors';

export const Styles = StyleSheet.create({

  view1:{padding: 12, backgroundColor: 'white',flex:1},
  upperView: {flexDirection: 'row', alignItems: 'center'},
  txt1:{
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: '#4A4A4A',
    paddingTop: 6,
    paddingBottom:12
  },
  upperView2: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop:12
  },
  txt3 :{
    fontSize: 12,
    color: '#4A4A4A',
    // paddingHorizontal: 8,
  },
  commonbutton :{
    backgroundColor: 'white',
    alignItem:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    width: '100%',
    paddingVertical: 9,
  },
  commonbutton2 :{
    backgroundColor: Colors.primarycolor,
    alignItem:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    width: '100%',
    paddingVertical: 9,
    marginVertical:20
  },
  maintxt : {
    color:'#4A4A4A',
    fontFamily:Fonts.Assistant700,
    fontSize:16,
    marginBottom:12
  },
  middletxt:{
    textAlign: 'center',
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: '#4A4A4A',
    paddingTop: 5,
  },
 imageView : {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingTop: 20,
    paddingBottom: 32,
  }

});
