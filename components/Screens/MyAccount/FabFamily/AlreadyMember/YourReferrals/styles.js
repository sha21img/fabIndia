import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    mainView: {
        flexGrow: 1,
    },
    upperView: { backgroundColor: '#F3E0E0', padding: 25 },
    upperTxtOne: { color: Colors.primarycolor, fontSize: 16, fontFamily: Fonts.Assistant400 },
    upperTxtTwo: { color: Colors.textcolor, fontSize: 16, fontFamily: Fonts.Assistant400 },
    mainbox: { paddingHorizontal: 15, paddingVertical: 10 },
    referbox: {
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
    }, referBoxTxtOne: {
        color: Colors.inactiveicon,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    },
    referBoxTxtTwo: {
        color: Colors.primarycolor,
        fontFamily: Fonts.Assistant700,
        // fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 5,
    },
    referbox2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    singlerefer: {
        backgroundColor: '#EDEDED',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '48%',
    },
    singlerefertxt: {
        color: Colors.inactiveicon,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    }
    ,
    locationIcon: {
        height: 32,
        width: 32,
    },
    singlerefertxt2: { color: Colors.primarycolor, fontFamily: Fonts.Assistant700, fontSize: 30, paddingTop: 5 },
    userView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 22,
        borderBottomWidth: 0.5,
        borderColor: '#EDEDED',
        alignItems: 'center',
    }, nameTxt: {
        color: Colors.textcolor, paddingHorizontal: 10, fontSize: 14, fontFamily: Fonts.Assistant400
    },
    usernameView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, modalShadow: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }, modalMainView: {
        marginTop: 'auto',
        // padding: 14,
        paddingHorizontal: 15,
        // alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 20,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
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
        borderBottomWidth: 1, borderBottomColor: "#BDBDBD",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 1,
        paddingVertical: 15,
        // paddingTop: 15,
        // paddingHorizontal: 4
    }, modalHeadingTxt: {
        flex: 1,
        fontSize: 18,
        fontFamily: Fonts.Assistant600,
        color: Colors.textcolor
    }, optionView: {
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD",
        paddingVertical: 15,
        backgroundColor: 'white',
        marginBottom: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    }, optionImg: {
        width: 20,
        height: 20
    }, optionTxt: {
        fontSize: 16, color: Colors.textcolor,
        marginLeft: 10,
        fontFamily: Fonts.Assistant400
    }

});
export default styles;