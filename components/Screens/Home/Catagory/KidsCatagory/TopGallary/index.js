import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Fonts from '../../../../../../assets/fonts';
import {image} from '../../../../../../assets/images';

const dimension = Dimensions.get('window');

const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 214,
          width: dimension.width / 1.5,
        }}
        source={image.kidsummer}>
        <View style={[Styles.txtbox, {top: 15}]}>
          <Text style={Styles.imagetxt}>Summer vacation</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 214,
          width: dimension.width / 3,
        }}
        source={image.kidlazing}>
        <View style={[Styles.txtbox, {top: 15}]}>
          <Text style={Styles.imagetxt}>Lazing around</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 214,
          width: dimension.width / 3,
        }}
        source={image.kidplaytime}>
        <View style={[Styles.txtbox, {bottom: 15}]}>
          <Text style={Styles.imagetxt}>Playtime</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 214,
          width: dimension.width / 1.5,
        }}
        source={image.kidplaying}>
        <View style={[Styles.txtbox, {bottom: 15}]}>
          <Text style={Styles.imagetxt}>Playing dress up</Text>
        </View>
      </ImageBackground>

      <View
        style={{
          width: 160,
          height: 160,
          backgroundColor: 'rgba(215, 175, 73, 0.8)',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
              fontFamily: Fonts.IndieFlower,
            }}>
            Kids
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopGallary;
