import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
    MenuItem:{
        paddingVertical:20,
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderBottomColor:"#EDEDED"
    },
    MenuItemText:{
        color:Colors.textcolor,
        fontFamily:Fonts.Assistant400,
        fontSize:16,
        lineHeight:16 
    }
  });
