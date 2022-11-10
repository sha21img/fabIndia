import { StyleSheet } from "react-native";
import { Colors } from "../../../assets/Colors";
import Fonts from "../../../assets/fonts";

export const Styles = StyleSheet.create({
    GalleryContainer:{flexDirection: 'row', flexWrap: 'wrap', width: '100%'},
    TextContainer:{
        backgroundColor: Colors.primarycolor,
        height: 180,
        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      TextData:{
        fontFamily: Fonts.PlayfairDisplay600Italic,
        fontSize: 26,
        color: '#ffffff',
      },
      LinearContainer:{width:"100%", height:67, bottom:0, position:"absolute"},
      LinearContainerText:{fontSize: 16, color: '#ffffff', bottom:12, left:15, position:"absolute"}
})