import {View, Text, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import InputText from '../../../../Common/InputText';
import CommonButton from '../../../../Common/CommonButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Styles} from './styles';

export default function DontDeliver() {
  const [userDetail, setUserDetail] = useState({
    pincode: '',
    locality: '',
  });
  const [modalVisible, setModalVisible] = useState(true);
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <Text style={Styles.heading}>You don’t deliver in my area</Text>
        <Text style={Styles.description}>
          Give us your pincode and locality details and we will notify you when
          we start delivering in your area
        </Text>
        <InputText
          label={'Pincode'}
          onChangeText={text =>
            setUserDetail(() => {
              return {...userDetail, pincode: text};
            })
          }
          value={userDetail.pincode}
          customStyle={Styles.customstyle}
        />
        <InputText
          label={'Locality'}
          onChangeText={text =>
            setUserDetail(() => {
              return {...userDetail, locality: text};
            })
          }
          value={userDetail.locality}
          customStyle={Styles.customstyle}
        />
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Submit"
          btntxtColor="#BDBDBD"
          customViewStyle={Styles.commonbtncustom}
        />
      </ScrollView>

      <View style={Styles.commonbtnbox}>
        <CommonButton
          handleClick={() => handleClick()}
          backgroundColor="#BDBDBD"
          txt="Call us"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.modalcontainer}>
          <View style={Styles.modalbox}>
            <View style={Styles.modaltopbox}>
              <View style={{width: '90%'}}>
                <Text style={Styles.modalhead}>
                  We will get back to you soon! Your ticket ID is
                  COM0000000001816
                </Text>
              </View>
              <AntDesign
                name="closecircleo"
                color={Colors.textcolor}
                size={25}
              />
            </View>
            <Text style={Styles.description}>
              You’ll be notified on the app, SMS and email when we start
              delivering in your area.
            </Text>
            <CommonButton
              handleClick={() => handleClick()}
              txt="Got it"
              customViewStyle={{
                backgroundColor: Colors.primarycolor,
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
