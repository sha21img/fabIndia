import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import AboutFabFamily from './AboutFabFamily';
import Benefits from './Benefits';
import Membership from './Membership';
import ReferFriend from './ReferFriend';
import AlreadyMember from './AlreadyMember';
import {image} from '../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import CommonTopTab from '../../../Common/CommonTopTab';
import {FabFamilyTabData} from '../../../../constant';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FabFamily() {
  const screenObj = {
    'About FabFamily': AboutFabFamily,
    Benefits: Benefits,
    Membership: Membership,
    'Refer a friend': ReferFriend,
  };
  const dataMap = FabFamilyTabData.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  return (
    <>
      {/* <WebView
        originWhitelist={['*']}
        style={{backgroundColor: '#fff'}}
        source={{uri: 'https://www.fabfamily.fabindia.com/abouttheprogram'}}
      /> */}
      <ImageBackground
        resizeMode="cover"
        source={image.fabfamily}
        style={{
          height: 210,
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'rgba(144, 50, 51, 0.5)',
        }}>
        <LinearGradient
          colors={['rgba(144, 50, 51, 0.4)', 'rgba(144, 50, 51, 0.4)']}
          style={{height: 210}}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}></LinearGradient>
        <Image
          source={image.fabfamilyflower}
          style={{position: 'absolute', right: 0, bottom: 0}}
        />
      </ImageBackground>
      <CommonTopTab data={dataMap} />

      {/* <AlreadyMember /> */}
      {/* <ReferFriend /> */}
      {/* <Membership /> */}
      {/* <Benefits /> */}
      {/* <AboutFabFamily /> */}
    </>
  );
}
