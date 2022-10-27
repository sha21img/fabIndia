import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {image} from '../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {Colors} from '../../../assets/Colors';
import Header from '../../Common/Header/header';
export default MyAccount = () => {
  const pages = [
    {
      icon: image.document,
      name: 'My Orders',
      routes: '',
    },
    {
      icon: image.location,
      name: 'My Addresses',
      routes: '',
    },
    {
      icon: image.headphone,
      name: 'Customer Care',
      routes: '',
    },
    {
      icon: image.ribbon,
      name: 'FabFamily',
      routes: '',
    },
    {
      icon: image.savedCard,
      name: 'Saved Cards',
      routes: '',
    },
    {
      icon: image.pendingPayment,
      name: 'Pending Payments',
      routes: '',
    },
    {
      icon: image.GiftCard,
      name: 'Gift Cards',
      routes: '',
    },
    {
      icon: image.ContactUs,
      name: 'Contact us',
      routes: '',
    },
    {
      icon: image.UnSubscribe,
      name: 'Unsubscribe',
      routes: '',
    },
    {
      icon: image.DelAccount,
      name: 'Delete my Account',
      routes: '',
    },
  ];
  return (
    <>
      <Header
      customStyle={{elevation:3, backgroundColor:"#ffffff"}}
        title="My Account"
        leftIcon={
          <MaterialCommunityIcons name="chevron-left" style={{fontSize: 25}} />
        }
        rightIcon={
          <MaterialCommunityIcons name="cart-outline" style={{fontSize: 25}} />
        }
      />
      {/* <View style={{elevation:10, width:'100%', height:3}}></View> */}
      <ScrollView style={{backgroundColor: '#ffffff', marginTop:5}}>
        <View style={styles.profileContainer}>
          <View style={{alignItems: 'flex-end'}}>
            <MaterialCommunityIcons name="border-color" size={15} />
          </View>
          <View
            style={{
              paddingVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 90,
                width: 90,
                borderRadius: 50,
                marginRight: 20,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={image.defaultProfile} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 20,
                  color: Colors.textcolor,
                }}>
                Tanya Singh
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: Colors.inactiveicon,
                }}>
                23456789456
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 18,
                  color: Colors.inactiveicon,
                }}>
                tanyasingh@gmail.com
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 14,
                  color: Colors.primarycolor,
                  marginTop: 12,
                }}>
                Change password
              </Text>
            </View>
          </View>
        </View>
        {pages.map(item => {
          return (
            <View
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
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  {item.name}
                </Text>
              </View>
              <Image source={image.rightArrow} />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};
