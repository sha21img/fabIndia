import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {image} from '../../../../../assets/images';
import {Styles} from './styles';

function AlreadyMember() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headerInnerView}>
        <Text style={Styles.headerTxtOne}>
          Hello,<Text style={Styles.headerTxtTwo}> Tanya</Text>
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
            <Text style={Styles.phoneNo}>+91 9812332189</Text>
            <Text style={Styles.phoneNo}>tanya.singh@gmail.com</Text>
            <Text style={Styles.phoneNo}>Female</Text>
            <Text style={Styles.phoneNo}>Date of birth 19 October 1991</Text>
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
          <Text style={Styles.updateAddressTxtTwo}> to get extra points!</Text>
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
  );
}

export default AlreadyMember;
