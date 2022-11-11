import {View, Text} from 'react-native';
import React from 'react';
import Videos from '../../Common/Videos';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function TopVideo() {
  const text = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#C57B31',
            paddingVertical: 10,
            paddingHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '10%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700,
              fontSize: 30,
              color: 'white',
            }}>
            AJRAKH
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 22,
              color: 'white',
              marginTop: 5,
            }}>
            Celebrating Traditions
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(191, 49, 49, 0.1)',
            width: 70,
            height: 70,
            position: 'absolute',
            right: 10,
            borderRadius: 50,
          }}></View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: Fonts.PlayfairDisplay400Italic,
            fontSize: 14,
            lineHeight: 22,
          }}>
          Traditionally,
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              lineHeight: 22,
              fontFamily: Fonts.PlayfairDisplay600Italic,
            }}>
            {' '}
            Ajrak{' '}
          </Text>
          is the name of a block printed cloth with deep crimson red and indigo
          blue background, bearing symmetrical patterns with interspersed
          unprinted sparkling white motifs.
        </Text>
        <View style={{flexDirection: 'row', paddingVertical: 12}}>
          <View
            style={{
              width: 6,
              height: 6,
              transform: [{rotate: '45deg'}],
              backgroundColor: Colors.primarycolor,
              marginHorizontal: 4,
            }}
          />
          <View
            style={{
              width: 6,
              height: 6,
              transform: [{rotate: '45deg'}],
              marginHorizontal: 4,
              backgroundColor: Colors.primarycolor,
            }}
          />
          <View
            style={{
              width: 6,
              height: 6,
              transform: [{rotate: '45deg'}],
              marginHorizontal: 4,
              backgroundColor: Colors.primarycolor,
            }}
          />
        </View>
      </View>
    </>
  );
}
