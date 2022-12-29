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
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {AuthBaseUrl2, BaseURL2, logout} from '../../../Common/Helper';
import {CommonActions} from '@react-navigation/native';

const pages = [
  {
    icon: image.document,
    name: 'My Orders',
    routes: 'MyOrder',
  },
  // {
  //   icon: image.location,
  //   name: 'My Addresses',
  //   routes: 'MyAddresses',
  // },
  // {
  //   icon: image.headphone,
  //   name: 'Customer Care',
  //   routes: 'CustomerCare',
  // },
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
  // {
  //   icon: image.ContactUs,
  //   name: 'Contact us',
  //   routes: 'ContactUs',
  // },
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
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const [userProfileData, setUserProfileData] = useState();

  const getProfiledata = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await fetch(`${BaseURL2}/users/current?lang=en&curr=INR`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
        Accept: 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setUserProfileData(res);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  useEffect(() => {
    getProfiledata();
  }, [focus]);
  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          const tokenGenerate = {...response.data, isCheck: false};
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const logoutt = async () => {
    await AsyncStorage.removeItem('cartID');
    // const res = await AsyncStorage.removeItem('generatToken');
    // console.log('delete', res);
    // console.log('before');
    // props.navigation.navigate('MyAccount', {
    //   screen: 'Login_Register',
    // });
    // console.log('after');
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'MyAccount'}],
      }),
    );
    await generatTokenWithout();
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Profile userProfileData={userProfileData} />
        {pages.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.routes == 'GiftCard') {
                  props.navigation.navigate(item.routes);
                } else {
                  props.navigation.navigate(item.routes);
                }
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
                <Image
                  source={item.icon}
                  style={{width: 30, height: 25, resizeMode: 'contain'}}
                />
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
        <View style={{margin: 15}}>
          <TouchableOpacity
            onPress={() => logoutt()}
            key={Math.random() * 10000}
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: Colors.primarycolor,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Assistant400,
                fontSize: 20,
                color: Colors.primarycolor,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default MyAccounts;
