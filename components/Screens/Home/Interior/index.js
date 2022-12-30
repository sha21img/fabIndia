import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;

export default function Interior(props) {
  const {data = {}} = props;
  // console.log('thisthishtishtishs Interior', data[0]);
  return (
    <TouchableOpacity
      style={{marginVertical: 15}}
      onPress={() => props.navigation.navigate('InteriorCatagory')}>
      <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: 200}}
        source={{uri: data[0]?.image.split('?')[0]}}>
        {/* source={image.interiorBackground}>
        {/* <View style={Styles.thoughtBox}>
        <Text style={Styles.thoughtText}>Build your sanctuary</Text>
      </View>
      <View style={Styles.headingBox}>
        <Text style={Styles.headingText}>INTERIOR DESIGN</Text>
        <Text style={Styles.headingText1}>Solutions</Text>
      </View>
      <TouchableOpacity style={Styles.buttonBox}>
        <Text style={Styles.buttonText}>Get in touch with us</Text>
      </TouchableOpacity> */}
        {/* </ImageBackground> */}
      </ImageBackground>
    </TouchableOpacity>
  );
}
