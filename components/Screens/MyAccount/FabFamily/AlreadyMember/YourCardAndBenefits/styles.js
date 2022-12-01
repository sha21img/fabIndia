import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    }, headerInnerView: {
        backgroundColor: Colors.primarycolor,
        paddingVertical: 20,
    }, headerTxtOne: {
        marginLeft: 20,
        fontSize: 30,
        fontFamily: Fonts.PlayfairDisplay600Italic,
        color: '#FFFFFF',
    }, headerTxtTwo: {
        fontSize: 30,
        fontFamily: Fonts.PlayfairDisplay400,
    }, stretch: {
        width: 85,
        height: 95,
        position: 'absolute',
        right: '-2%',
        resizeMode: 'contain',
    }, cardView: {
        backgroundColor: '#F8F6F5',
        paddingBottom: 20,
    }, card: {
        marginTop: 5,
        height: 250,
        width: width / 1.03,
        alignSelf: 'center'
        // left: -15
        // elevation: 5
    },
    containerViewOne: {
        paddingHorizontal: 15
    }, tierTxt: {
        marginTop: 14,
        backgroundColor: '#F8F6F5',
    }, progressBarStyle: {
        unfilledColor: 'none',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
    }, tierContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
    }, goldView: {
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderColor: '#F9D030',
        borderWidth: 1,
    }, goldTxt: {
        color: '#D8B84A',
        fontFamily: Fonts.Assistant600,
        fontSize: 10,
    }, platinumView: {
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'flex-end',
    }, platinumTxt: {
        color: '#908EA6',
        fontSize: 10,
        fontFamily: Fonts.Assistant600,
    }, upgradeTierTxtOne: {
        fontFamily: Fonts.Assistant400,
        color: Colors.textcolor,
        fontSize: 12,
    }, upgradeTierTxtTwo: {
        fontFamily: Fonts.Assistant700,
        fontSize: 12,
        color: Colors.textcolor,
    }, tierBenefitsHeadingTxt: {
        marginTop: 30,
        fontSize: 16,
        color: Colors.textcolor,
        fontFamily: Fonts.PlayfairDisplay700Italic,
    }, tierBenefitsTxtOne: {
        marginTop: 10,
        lineHeight: 20,
        color: Colors.textcolor,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    }, tierBenefitsTxtTwo: {
        lineHeight: 20,
        color: Colors.textcolor,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    }, tierBenefitsTxtThree: {
        lineHeight: 20,
        color: Colors.textcolor,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    }, tierBenefitsTxtFour: {
        lineHeight: 20,
        color: Colors.textcolor,
        fontSize: 14,
        fontFamily: Fonts.Assistant400
    }, containerViewTwo: {
        marginTop: 20,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 15
    }, buttonView: {
        flexDirection: 'row',
        paddingVertical: 20
    }, buttonOne: {
        backgroundColor: Colors.primarycolor,
        paddingVertical: 5,
        width: '40%',
    }, buttonTwo: {
        backgroundColor: Colors.inAactivecolor,
        paddingVertical: 5,
        width: '40%',
        marginLeft: 10
    }, dropDownContainerStyle: {
        borderColor: 'transparent',
        width: '50%',
        backgroundColor: '#F9F9F9',
        margin: 15,
    }, dropDownStyleOne: {
        backgroundColor: '#F9F9F9',
        paddingTop: 15,
    }, dropDownStyleTwo: {
        borderColor: '#E5E5E5',
        width: '50%',
        borderWidth: 1,
        backgroundColor: '#F9F9F9'
    }, buttonOne: {
        backgroundColor: Colors.primarycolor,
        paddingVertical: 5,
        width: '40%',
    },


})