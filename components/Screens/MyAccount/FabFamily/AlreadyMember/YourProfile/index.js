import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import ProgressBar from 'react-native-progress/Bar';
// import * as Progress from 'react-native-progress';
import {image} from '../../../../../../assets/images';
import {Styles} from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

function YourProfile(props, item) {
  // console.log('item/.,mnbvcvbnm,.', item);
  const dispatch = useDispatch();
  const {userDetail, loyalityPoints, loyalityTier} = item;

  return (
    <View>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.detailsContainer}>
          <View style={Styles.detailsInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>
                {!!userDetail && userDetail?.data?.user.first_name.charAt(0)}
                {userDetail?.data?.user.last_name.charAt(0)}
              </Text>
            </View>
            <View style={Styles.detailsTxtView}>
              <Text style={Styles.name}>
                {userDetail?.data?.user?.first_name}{' '}
                {userDetail?.data?.user?.last_name}
              </Text>
              <Text style={Styles.phoneNo}>+91 {userDetail?.data?.mobile}</Text>
              <Text style={Styles.phoneNo}>
                {userDetail?.data?.user?.email}
              </Text>
              <Text style={Styles.phoneNo}>
                {!!userDetail?.data?.gender && userDetail?.data?.gender}
              </Text>
              <Text style={Styles.phoneNo}>
                {!!userDetail?.data?.date_of_birth &&
                  userDetail?.data?.date_of_birth}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        {name: 'MyAccount'},
                        // {
                        //   name: 'MyAccounts',
                        // },
                      ],
                    }),
                  )
                }>
                <Text style={Styles.editProfile}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={Styles.tierTxt}>Tier</Text>
          <View style={{paddingHorizontal: 15}}>
            {/* <Progress.Bar
              progress={0.39}
              width={null}
              borderColor={'#EDF0ED'}
              borderRadius={0}
              height={3}
              color={'#005152'}
              unfilledColor={'#EDF0ED'}
            /> */}
            {/* <ProgressBar
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
            /> */}
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
            <Text style={Styles.pointsTxt}>FABCOINS BALANCE</Text>
            <Text style={Styles.points}>{loyalityPoints.totalPoints}</Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>FABCOINS REDEEMED</Text>
            <Text style={Styles.points}>
              {loyalityPoints.totalPoints - loyalityPoints.availablePoints}
            </Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>REWARDS AVAILED</Text>
            <Text style={Styles.points}>{loyalityPoints.availablePoints}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default YourProfile;
