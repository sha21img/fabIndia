import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {image} from '../../../../../../assets/images';
import {Styles} from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
function YourProfile(props, item) {
  console.log('item/.,mnbvcvbnm,.', item);
  // console.log('propspropsprops.', props);
  const [useDetail, setUserDetail] = useState({});
  const getProfileDetail = async () => {
    const token = await AsyncStorage.getItem('fabToken');
    const parseToken = JSON.parse(token);
    console.log('JSON.parse(token)', parseToken);

    const response = await axios
      .get(`https://api.apm20.gravty.io/v1/members/data/${item.referCode}/`, {
        headers: {
          // Authorization: `JWT ${parseToken.token}`,
          'Content-Type': 'application/json',
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          Authorization: `JWT ${parseToken.token}`,
        },
      })
      .then(response => {
        setUserDetail(response.data);
        console.log('poiuyf12345678', response.data);
      })
      .catch(error => {
        console.log('erro', error);
      });
  };
  useEffect(() => {
    getProfileDetail();
    console.log('kkkkkkkkkkkkkkkkkkkkkkkk');
  }, []);
  return (
    <View>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headerInnerView}>
          <Text style={Styles.headerTxtOne}>
            Hello,
            <Text style={Styles.headerTxtTwo}>
              {useDetail && useDetail?.data?.user?.first_name}
            </Text>
          </Text>
        </View>
        <Image style={Styles.stretch} source={image.fabfamilyflower} />

        <View style={Styles.detailsContainer}>
          <View style={Styles.detailsInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>TS</Text>
            </View>
            <View style={Styles.detailsTxtView}>
              <Text style={Styles.name}>Tanya Singh</Text>
              <Text style={Styles.phoneNo}>+91 {useDetail?.data?.mobile}</Text>
              <Text style={Styles.phoneNo}>{useDetail?.data?.user?.email}</Text>
              <Text style={Styles.phoneNo}>
                {!!useDetail?.data?.gender && useDetail?.data?.gender}
              </Text>
              <Text style={Styles.phoneNo}>
                {!!useDetail?.data?.date_of_birth &&
                  useDetail?.data?.date_of_birth}
              </Text>
              <Text style={Styles.editProfile}>Edit Profile</Text>
            </View>
          </View>
          <Text style={Styles.tierTxt}>Tier</Text>
          <View style={{paddingHorizontal: 15}}>
            <ProgressBar
              progress={0.39}
              width={375}
              color="#750000"
              style={{
                unfilledColor: 'none',
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'white',
              }}
            />
          </View>
          <View style={Styles.tierContainer}>
            <View style={Styles.goldView}>
              <Text style={Styles.goldTxt}>GOLD</Text>
            </View>
            <View style={Styles.platinumView}>
              <Text style={Styles.platinumTxt}>PLATINUM</Text>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={Styles.upgradeTierTxtOne}>
              Shop for{' '}
              <Text style={Styles.upgradeTierTxtTwo}>
                ₹ 75000 to upgrade
                <Text style={Styles.upgradeTierTxtOne}>to next tier</Text>
              </Text>
            </Text>
          </View>
        </View>

        <View style={Styles.updateAddressView}>
          <Text style={Styles.updateAddressTxtone}>
            Update your address
            <Text style={Styles.updateAddressTxtTwo}>
              {' '}
              to get extra points!
            </Text>
          </Text>
        </View>
        <View style={Styles.pointsContainer}>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>POINTS BALANCE</Text>
            <Text style={Styles.points}>321</Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>POINTS REDEEMED</Text>
            <Text style={Styles.points}>38</Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>EXPERIENCES REDEEMED</Text>
            <Text style={Styles.points}>0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default YourProfile;
