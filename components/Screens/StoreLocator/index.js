import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import CommonTopTab from '../../Common/CommonTopTab';
import {StoreLocateTab} from '../../../constant';
export default function StoreLocator() {
  const CardCompo = item => {
    return (
      <View style={{backgroundColor: 'red'}}>
        <Text>djds,jdweud.fd,w</Text>
      </View>
    );
  };
  const PaymentPage = () => {
    return (
      <View>
        <Text>ghdsdhwdhehd</Text>
      </View>
    );
  };
  const screenObj = {
    'India': CardCompo,
    'International': PaymentPage,
  };
  const dataMap = StoreLocateTab.map(item => ({
    title: item,
    card: screenObj[item],
  }));

  return (
    <View>
      <ImageBackground
        resizeMode="stretch"
        key={Math.random() * 1099900}
        style={{
          height: 310,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={image.fabshow}>
        <View
          style={{
            backgroundColor: 'rgba(144, 50, 51, 0.54)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30%',
            width: '70%',
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              width: '90%',
              fontSize: 18,
              lineHeight: 24,
              fontFamily: Fonts.Assistant700,
            }}>
            Continue your fab experience at a store near you
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          height: 92,
          backgroundColor: '#F3ECE8',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: Fonts.Assistant600,
            marginVertical: 12,
            marginHorizontal: 15,
          }}>
          Some of our stores will remain temporarily closed as per the
          government regulations during lockdown.
        </Text>
      </View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant600,
            color: '#4A4A4A',
          }}>
          Find your nearest store
        </Text>
      </View>
        <CommonTopTab data={dataMap} />
    </View>
  );
}
