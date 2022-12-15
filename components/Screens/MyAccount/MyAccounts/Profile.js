import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../../assets/Colors';
export default function Profile(props) {
  const navigation = useNavigation();
  const {userProfileData} = props;
  return (
    <View style={{padding: 20, backgroundColor: '#F8F6F5', marginBottom: 10}}>
      <TouchableOpacity
        style={{alignItems: 'flex-end'}}
        onPress={() =>
          navigation.navigate('MyProfile', {
            profiledata: userProfileData,
          })
        }>
        <MaterialCommunityIcons name="border-color" size={15} />
      </TouchableOpacity>
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
          {/* <Image source={image.defaultProfile} /> */}
          <Text style={{ fontSize: 45, color: '#CDCDCD' }}>{userProfileData?.name?.match(/\b(\w)/g).join('')}</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Assistant600,
              lineHeight: 20,
              color: Colors.textcolor,
            }}>
            {userProfileData?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              lineHeight: 18,
              color: Colors.inactiveicon,
            }}>
            {userProfileData?.contactNumber}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              lineHeight: 18,
              color: Colors.inactiveicon,
            }}>
            {userProfileData?.dateOfBirth}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              lineHeight: 18,
              color: Colors.inactiveicon,
            }}>
            {userProfileData?.uid}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: Fonts.Assistant400,
                lineHeight: 14,
                color: Colors.primarycolor,
                marginTop: 12,
              }}>
              Change password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
