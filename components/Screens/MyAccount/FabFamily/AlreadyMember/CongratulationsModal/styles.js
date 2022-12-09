import { StyleSheet } from "react-native";
import { Colors } from '../../../../../../assets/Colors'
import Fonts from "../../../../../../assets/fonts";
import { Images } from '../../../../../../assets/images';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    }, termsAndConditions: {
        paddingHorizontal: 12,
        color: '#750000',
        fontSize: 18,
        marginVertical: 15
    }, modalShadow: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }, modalMainView: {
        marginTop: 'auto',
        // padding: 14,
        paddingHorizontal: 16,
        // alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 20,
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        // marginBottom: 1,
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        elevation: 5
    }, headingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 1,
        paddingVertical: 15,
        // paddingTop: 10,
        // paddingHorizontal: 4
    }, modalHeadingTxt: {
        flex: 1,
        fontSize: 18,
        color: Colors.textcolor,
        fontFamily: Fonts.Assistant600
    }, modalTxtView: {
        width: '100%',
        backgroundColor: 'white',
        paddingBottom: 20
    }, modalTxt: {
        width: '95%',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        fontSize: 16,
        color: Colors.textcolor,
        fontFamily: Fonts.Assistant400
    }, buttonView: {
        // marginTop: 5,
        // marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }, button: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        width: "100%",
        backgroundColor: '#750000',
        // marginBottom: 20,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    }, buttonTxt: {
        color: 'white',
        fontSize: 16
    }, buttonOne: {
        backgroundColor: Colors.primarycolor,
    },
})