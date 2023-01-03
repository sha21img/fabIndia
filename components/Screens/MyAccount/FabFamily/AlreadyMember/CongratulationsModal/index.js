import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable } from 'react-native'
import CloseIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles'
import { Colors } from '../../../../../../assets/Colors'
import { Images } from '../../../../../../assets/images';
import Fonts from '../../../../../../assets/fonts';
import CommonButton from '../../../../../Common/CommonButton';

function CongratulationModal() {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.termsAndConditions}>Congratulations</Text>
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
                            <Text style={styles.modalHeadingTxt}>Congratulations</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <CloseIcon name="close-circle-outline" size={25} color={Colors.textcolor} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.modalTxtView}>
                        <Text style={styles.modalTxt}>Your friend has successfully completed the 1st order, you have been credited with <Text style={{ color: Colors.textcolor, fontFamily: Fonts.Assistant700, fontSize: 16 }}>XXX points!</Text> Happy shopping!</Text>
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

export default CongratulationModal

