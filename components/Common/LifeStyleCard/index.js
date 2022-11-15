import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';
import {Styles} from './style';

export default function LifeStyleCard() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={Styles.container}
      source={image.lifeStyleBackground}>
      <View style={Styles.headingBox}>
        <Text style={Styles.heading}>Lifestyle 360</Text>
        <Text style={Styles.description}>
          Combos that'll keep you feeling fab!
        </Text>
      </View>
      <View style={Styles.imageCardBox}>
        <ImageBackground
          resizeMode="cover"
          style={Styles.imageCard}
          source={image.lifeStyleImage}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.75)']}
            style={Styles.innerImageCard}>
            <Text style={Styles.imageText}>Work from Home Essentials</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}
