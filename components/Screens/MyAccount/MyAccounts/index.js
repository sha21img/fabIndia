import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../../../../assets/Colors';
import Profile from './Profile';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

const pages = [
  {
    icon: image.document,
    name: 'My Orders',
    routes: 'MyOrder',
  },
  {
    icon: image.location,
    name: 'My Addresses',
    routes: 'MyAddresses',
  },
  {
    icon: image.headphone,
    name: 'Customer Care',
    routes: 'CustomerCare',
  },
  {
    icon: image.ribbon,
    name: 'FabFamily',
    routes: 'FabFamily',
  },
  // {
  //   icon: image.savedCard,
  //   name: 'Saved Cards',
  //   routes: '',
  // },
  // {
  //   icon: image.pendingPayment,
  //   name: 'Pending Payments',
  //   routes: '',
  // },
  {
    icon: image.GiftCard,
    name: 'Gift Cards',
    routes: 'GiftCard',
  },
  {
    icon: image.ContactUs,
    name: 'Contact us',
    routes: 'ContactUs',
  },
  {
    icon: image.UnSubscribe,
    name: 'Unsubscribe',
    routes: 'Unsubscribe',
  },
  {
    icon: image.DelAccount,
    name: 'Delete my Account',
    routes: 'DeleteMyAccount',
  },
];
const MyAccounts = props => {
  const focus = useIsFocused();
  const [userProfileData, setUserProfileData] = useState();

  const getProfiledata = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await fetch(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current?lang=en&curr=INR`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
          Accept: 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        setUserProfileData(res);
      });
  };
  useEffect(() => {
    getProfiledata();
  }, [focus]);

  return (
    <>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Profile userProfileData={userProfileData} />
        {pages.map(item => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.routes)}
              key={Math.random() * 10000}
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                borderBottomColor: '#EDEDED',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.icon} />
                <Text
                  style={{
                    marginLeft: 23,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  {item.name}
                </Text>
              </View>
              <Image source={image.rightArrow} />
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={async () => {
            const res = await AsyncStorage.removeItem('generatToken');
            console.log('delete', res);
            props.navigation.navigate('MyAccount', {
              screen: 'Login_Register',
            });
          }}
          key={Math.random() * 10000}
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 2,
            borderBottomColor: '#EDEDED',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={image.DelAccount} />
            <Text
              style={{
                marginLeft: 23,
                fontFamily: Fonts.Assistant400,
                fontSize: 14,
                color: Colors.textcolor,
              }}>
              Logout
            </Text>
          </View>
          <Image source={image.rightArrow} />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
export default MyAccounts;
