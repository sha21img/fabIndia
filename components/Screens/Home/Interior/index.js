import {View, Text, Dimensions, ImageBackground} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
const width = Dimensions.get('window').width;

export default function Interior() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        width: '100%',
        height: width / 1.3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={image.interiorBackground}>
      <View style={{backgroundColor: '#288196', padding: 15, width: '60%'}}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>
          Build your sanctuary
        </Text>
      </View>
      <View style={{backgroundColor: '#68523E', padding: 15, width: '60%'}}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>INTERIOR DESIGN</Text>
        <Text style={{fontSize: 18, fontWeight: '400'}}>Solutions</Text>
      </View>
    </ImageBackground>
  );
}
