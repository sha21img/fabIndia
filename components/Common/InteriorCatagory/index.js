import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
const dimension = Dimensions.get('window');
const InteriorCatagory = () => {
  return (
    <View
      style={{
        height: 522,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#288196',
          marginBottom: 10,
          paddingHorizontal: 40,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 18,
            color: '#FFFFFF',
          }}>
          Build your sanctuary
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#8A6542',
          marginBottom: 10,
          paddingHorizontal: 25,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600,
            fontSize: 20,
            textAlign: 'center',
            color: '#FFFFFF',
            lineHeight: 32,
          }}>
          INTERIOR DESIGN
        </Text>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600,
            fontSize: 20,
            textAlign: 'center',
            color: '#FFFFFF',
            lineHeight: 22,
          }}>
          SOLUTIONS
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 40,
        }}>
        <Text
          style={{
            color: Colors.primarycolor,
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
          }}>
          INTERIOR DESIGN
        </Text>
      </View>
      <View style={{position: 'absolute', backgroundColor: 'red', zIndex: -1}}>
        <Image
          source={image.kidinterior1}
          style={{height: 261, width: dimension.width}}
        />
        <Image
          source={image.kidinterior2}
          style={{height: 261, width: dimension.width}}
        />
      </View>
    </View>
  );
};

export default InteriorCatagory;
