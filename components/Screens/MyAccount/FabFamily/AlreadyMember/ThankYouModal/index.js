import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable } from 'react-native'
import CloseIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles'
import { Colors } from '../../../../../../assets/Colors'
import { Images } from '../../../../../../assets/images';
import Fonts from '../../../../../../assets/fonts';
import CommonButton from '../../../../../Common/CommonButton';

function ThankYouModal() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.termsAndConditions}>Thank You</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalShadow} >
                    <View style={styles.modalMainView}>
                        <View style={styles.headingView}>
                            <Text style={styles.modalHeadingTxt}>Thank you for sharing!</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <CloseIcon name="close-circle-outline" size={25} color={Colors.textcolor} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.modalTxtView}>
                        <Text style={styles.modalTxt}>Your referral code has been sent to your friends! </Text>
                    </View>
                    <View
                        style={{
                            padding: 12,
                            backgroundColor: '#FDFDFD',
                            elevation: 5,
                        }}>
                        <CommonButton
                            backgroundColor="#BDBDBD"
                            txt="Start Shopping now"
                            customViewStyle={{
                                backgroundColor: Colors.primarycolor,
                            }}
                        />
                    </View>
                </View>

            </Modal >

        </View >
    )
}

export default ThankYouModal

