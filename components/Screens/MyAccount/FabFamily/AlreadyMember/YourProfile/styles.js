import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    stretch: {
        width: 85,
        height: 95,
        position: 'absolute',
        right: '-2%',
        resizeMode: 'contain',
    },
    headerInnerView: {
        backgroundColor: Colors.primarycolor,
        paddingVertical: 20,
    },
    headerTxtOne: {
        marginLeft: 20,
        fontSize: 30,
        fontFamily: Fonts.PlayfairDisplay600Italic,
        color: '#FFFFFF',
    },
    headerTxtTwo: {
        fontSize: 30,
        fontFamily: Fonts.PlayfairDisplay400,
    },
    detailsContainer: {
        backgroundColor: '#F8F6F5',
        paddingTop: 24,
        paddingBottom: 10,
    },
    detailsInnerView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleTxt: {
        color: '#E0E0E0',
        fontSize: 55,
        fontFamily: Fonts.Assistant400,
    },
    detailsTxtView: {
        marginLeft: 20,
    },
    name: {
        color: Colors.textcolor,
        fontSize: 16,
        fontFamily: Fonts.Assistant600,
    },
    phoneNo: {
        color: Colors.textcolor,
        fontSize: 14,
        fontFamily: Fonts.Assistant600,
    },
    editProfile: {
        fontSize: 16,
        paddingTop: 10,
        color: Colors.primarycolor,
    },
    tierTxt: {
        paddingHorizontal: 15,
        marginTop: 14,
    },
    tierContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        marginTop: 7,
    },
    goldView: {
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderColor: '#F9D030',
        borderWidth: 1,
    },
    goldTxt: {
        color: '#D8B84A',
        fontFamily: Fonts.Assistant600,
        fontSize: 10,
    },
    platinumView: {
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'flex-end',
    },
    platinumTxt: {
        color: '#908EA6',
        fontSize: 10,
        fontFamily: Fonts.Assistant600,
    },
    upgradeTierTxtOne: {
        paddingHorizontal: 15,
        fontFamily: Fonts.Assistant400,
        color: Colors.textcolor,
        fontSize: 12,
    },
    upgradeTierTxtTwo: {
        fontFamily: Fonts.Assistant700,
        fontSize: 12,
        color: Colors.textcolor,
    },
    updateAddressView: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#F3E0E0',
        marginVertical: 10,
    },
    updateAddressTxtone: {
        fontFamily: Fonts.Assistant400,
        fontSize: 16,
        color: Colors.primarycolor,
    },
    updateAddressTxtTwo: {
        fontFamily: Fonts.Assistant400,
        fontSize: 16,
        color: Colors.textcolor,
    },
    pointsContainer: {
        paddingHorizontal: 15,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    pointsView: {
        width: width / 3.5,
        height: 96,
        backgroundColor: '#EDEDED',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    pointsTxt: {
        fontSize: 14,
        fontFamily: Fonts.Assistant400,
        color: '#979797',
    },
    points: {
        fontSize: 30,
        fontFamily: Fonts.Assistant700,
        color: Colors.primarycolor,
    },
});
