import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import {Styles} from './styles';
const width = Dimensions.get('window').width;

export default function Interior() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={Styles.imagebg}
      source={image.interiorBackground}>
      <View style={Styles.thoughtBox}>
        <Text style={Styles.thoughtText}>Build your sanctuary</Text>
      </View>
      <View style={Styles.headingBox}>
        <Text style={Styles.headingText}>INTERIOR DESIGN</Text>
        <Text style={Styles.headingText1}>Solutions</Text>
      </View>
      <TouchableOpacity style={Styles.buttonBox}>
        <Text style={Styles.buttonText}>Get in touch with us</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
