import { StyleSheet } from "react-native";
import Fonts from "../../../assets/fonts";

export const Styles = StyleSheet.create({
    Container:{
        // height:527,
        backgroundColor:"#F3E5D8",
        // width:"100%"
    },
    ImageContainer:{
        height:124,
        position:"absolute",
        top:0,
    },
    HeadingContainer:{
        marginTop:40,
        alignItems:"center",
        marginHorizontal:14,
        padding:5
    },
    ImageBackContainer:{
        height:307,
        width:170,
        marginLeft:20,
        marginBottom:24
    },
    CardText:{fontFamily:Fonts.Assistant400, fontSize:16,color:"#ffffff",},
    CardTextContainer:{
        height:40,
        width:"100%",
        backgroundColor:"#926EC0",
        position:"absolute",
        bottom:0,
        paddingHorizontal:12,
        paddingTop:7
    }
})