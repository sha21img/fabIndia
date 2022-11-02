import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Fonts from '../../../../../../assets/fonts';
import {image} from '../../../../../../assets/images';

const dimension = Dimensions.get('window');

const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      <View>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 242,
            width: dimension.width / 1.5,
          }}
          source={image.homedecorlight}>
          <View style={[Styles.txtbox, {top: 15}]}>
            <Text style={Styles.imagetxt}>Summer vacation</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 242,
            width: dimension.width / 1.5,
          }}
          source={image.kidlazing}>
          <View style={[Styles.txtbox, {bottom: 15}]}>
            <Text style={Styles.imagetxt}>Lazing around</Text>
          </View>
        </ImageBackground>
      </View>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 484,
          width: dimension.width / 3,
        }}
        source={image.kidplaytime}>
        <View style={[Styles.txtbox, {bottom: 15}]}>
          <Text style={Styles.imagetxt}>Playtime</Text>
        </View>
      </ImageBackground>

      <View
        style={{
          width: 160,
          height: 160,
          backgroundColor: 'rgba(100, 141, 220, 0.8)',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          borderRadius: 100,
          top: 142,
        }}>
        <Image
          source={image.whitelogo}
          style={{height: 23, width: 67}}
          resizeMode="contain"
        />
        <Text
          style={{
            color: '#FFFFFF',
            marginLeft: 3,
            fontSize: 20,
            fontFamily: Fonts.PlayfairDisplay400Italic,
          }}>
          home décor
        </Text>
      </View>
    </View>
  );
};

export default TopGallary;
