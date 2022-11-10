import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
    marginTop: 15,
    overflow:"hidden"
  },
  linearContainer: {
    position: 'absolute',
    bottom: -14,
    left:-14,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor:"#99162A",
    height: 104,
    width: 104,
    opacity:0.8
  },
  cardText:{
    marginLeft: 5,
    marginVertical: 5,
    fontSize: 14,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    lineHeight: 21,
    // position: 'absolute',
    // bottom: 12,
    // left: 12,
    color: '#ffffff',
  }
});
