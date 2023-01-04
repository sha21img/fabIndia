import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import {Colors} from '../../../../assets/Colors';
import CommonButton from '../../../Common/CommonButton';
import Fonts from '../../../../assets/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseURL2, logout} from '../../../Common/Helper';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
export default function AllAddresses(props) {
  const focus = useIsFocused();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [peritem, setPeritem] = useState(null);
  const [selected, setSelected] = useState('');
  const [checkaddress, setcheckAddress] = useState([]);

  const getAddress = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}/users/current/addresses`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        setcheckAddress(response.data.addresses);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const deleteAddress = async id => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .delete(
        `${BaseURL2}/users/current/addresses/${id}`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        getAddress();
        setModalShow(false);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  useEffect(() => {
    getAddress();
  }, [focus]);
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        {checkaddress?.length > 0 ? (
          <Text style={Styles.headingtxt}>Saved Addresses</Text>
        ) : null}
        <View style={Styles.body}>
          {checkaddress.map((faq, index) => (
            <>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  Styles.txtbox,
                  {
                    marginBottom: faq.length - 1 == index ? 0 : 15,
                    borderColor: '#ababab',
                    borderWidth: 1,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={Styles.mainDivText}>
                    Home{faq.defaultAddress ? '(Default)' : null}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      setShow(prev => (prev != faq.id ? faq.id : ''))
                    }>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      color={Colors.textcolor}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                {show == faq.id ? (
                  <View style={Styles.modalbox}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Address', {
                          editData: faq,
                          from: 'Acccount',
                        });
                        setShow(false);
                      }}>
                      <Text style={Styles.edittxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setModalShow(true);
                        setPeritem(faq);
                        setShow(false);
                      }}>
                      <Text style={Styles.deletetxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
                <Text style={Styles.titletxt}>
                  {faq.firstName} {faq.lastName}
                </Text>
                <Text style={Styles.titletxt}>{faq.line1}</Text>
                <Text style={Styles.titletxt}>{faq.line2}</Text>
                <Text style={Styles.titletxt}>
                  {faq.town} {faq.postalCode}
                </Text>
                <Text style={Styles.titletxt}>Mobile - {faq.phone}</Text>
              </TouchableOpacity>
            </>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          backgroundColor: Colors.primarycolor,
          alignSelf: 'flex-end',
          borderRadius: 50,
          position: 'absolute',
          bottom: '4%',
          right: '5%',
        }}
        onPress={() =>
          props.navigation.navigate('Address', {from: 'Acccount'})
        }>
        <Entypo name="plus" color="white" size={24} />
      </TouchableOpacity>
      <Modal
        visible={modalShow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={Styles.modalcontainer}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              elevation: 5,
              borderRadius: 4,
              paddingHorizontal: 15,
              paddingVertical: 10,
              width: '100%',
              top: '35%',
            }}>
            <View style={Styles.headbox}>
              <Text style={Styles.headtxt}>
                You are about to remove address!
              </Text>
              <TouchableOpacity onPress={() => setModalShow(false)}>
                <Ionicons name="close-circle-outline" size={15} />
              </TouchableOpacity>
            </View>
            <Text style={Styles.head1txt}>
              Are you sure you want to remove this Address?
            </Text>
            <View
              style={{
                paddingVertical: 15,
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant700,
                  color: Colors.textcolor,
                }}>
                {peritem?.firstName} {peritem?.lastName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  color: Colors.textcolor,
                }}>
                {peritem?.line1} {peritem?.line2} {peritem?.town}{' '}
                {peritem?.postalCode}
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CommonButton
                txt="Cancel"
                customViewStyle={{
                  backgroundColor: '#FFFFFF',
                  width: '47%',
                  borderWidth: 1,
                  borderColor: Colors.primarycolor,
                }}
                btntxtColor={Colors.primarycolor}
                handleClick={() => setModalShow(false)}
              />
              <CommonButton
                backgroundColor="#BDBDBD"
                txt="Remove address"
                customViewStyle={{
                  backgroundColor: Colors.primarycolor,
                  width: '47%',
                }}
                handleClick={() => deleteAddress(peritem?.id)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
