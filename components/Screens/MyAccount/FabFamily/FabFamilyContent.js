import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Linking,
    Image,
} from 'react-native';
import Fonts from '../../../../assets/fonts';
import { Colors } from '../../../../assets/Colors';

function FabFamilyContent(props) {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <View style={Styles.mainView}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.inactiveicon, paddingBottom: 5, marginBottom: 8 }}>
                    <Text style={Styles.headTextStyle}>Fabfamily Rewards Program</Text>
                </View>
                <Text style={Styles.textStyle}>You currently have{' '}
                    <Text style={Styles.linkText} onPress={() => {
                        Linking.openURL('https://fabfamilly.loyaltycloud1.com/')
                    }}>0 Fabcoins</Text>
                    {'\n'}Redeem these points against your order value during checkout.
                </Text>

                <View style={{ marginVertical: 10 }}>
                    <Text style={Styles.headText}>GET MORE WITH EVERY ORDER</Text>
                </View>

                <Text style={Styles.textStyle}>Earn upto 7 points per Rs.100 spent. Learn more about the Fabfamily Rewards Program and all its benefits. {' '}
                    <Text style={Styles.linkText} onPress={() => {
                        Linking.openURL('https://www.fabfamily.fabindia.com/faq')
                    }}>Link</Text>{'\n'}
                </Text>

                <Text style={Styles.textStyle}>+ Get up to 300 points for referring your friend!{'\n'}</Text>

                <Text style={Styles.textStyle}>+ Earn bonus points by completing your profile. {' '}
                    <Text style={Styles.linkText} onPress={() => {
                        props.navigation.goBack();
                    }}>Link</Text>{'\n'}
                </Text>

                <Text style={Styles.textStyle}>Browse all our curated experiential offerings. Choose from a range of staycations, quick getaways and dining delights. {' '}
                    <Text style={Styles.linkText} onPress={() => {
                        Linking.openURL('https://www.fabfamily.fabindia.com/abouttheprogram')
                    }}>Link</Text>
                </Text>

                <Image style={{ width: '100%', height: 150, marginVertical: 8, resizeMode: 'contain' }}
                    source={{ uri: 'https://apisap.fabindia.com/medias/fab-family-myaccount-banner-17-oct-22.png?context=bWFzdGVyfGltYWdlc3w0MDYzMzZ8aW1hZ2UvcG5nfGgzNC9oYjQvOTA4OTg4MjM1Nzc5MC9mYWItZmFtaWx5LW15YWNjb3VudC1iYW5uZXItMTctb2N0LTIyLnBuZ3wwNThiZDhlM2Q1NmMxMzUxMTM5ZjFjMDQ2NjRhNDVlNWYwNTY0MjNiNDJjYjRjNGI0MDBhYTlkMjdiYmQyYmVi' }} />

                <Text style={[Styles.linkText, { alignSelf: 'flex-end' }]} onPress={() => {
                    Linking.openURL('https://fabfamilly.loyaltycloud1.com/')
                }}>Know More About FabFamily</Text>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    mainView: {
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    headTextStyle: {
        fontSize: 22,
        color: Colors.BLACK,
        fontFamily: Fonts.Assistant600
    },
    textStyle: {
        fontSize: 14,
        color: Colors.textcolor,
        fontFamily: Fonts.Assistant400,
    },
    linkText: {
        fontSize: 16,
        color: Colors.primarycolor,
        textDecorationLine: 'underline'
    },
    headText: {
        fontSize: 18,
        color: Colors.BLACK,
        fontFamily: Fonts.Assistant600
    }
})

export default FabFamilyContent;
