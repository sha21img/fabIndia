import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Fonts from '../../../../../../assets/fonts';
import {image} from '../../../../../../assets/images';
const imageData = [
  {
    image: image.rise,
    title: 'Rise & shine!',
  },
  {
    image: image.fitness,
    title: 'Fitness routine',
  },
  {
    image: image.meal,
    title: 'Meal prep',
  },
  {
    image: image.lounging,
    title: 'Lounging',
  },
  {
    image: image.out,
    title: 'Out and about',
  },
  {
    image: image.bedtime,
    title: 'Bedtime stories',
  },
];
const dimension = Dimensions.get('window');

const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 214,
          width: dimension.width,
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
          width: dimension.width / 1.5,
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
          width: dimension.width / 3,
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
          backgroundColor: '#5C3831',
          position: 'absolute',
          opacity:0.8,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          borderRadius: 100,
          top: 142,
        }}>
        <View
          style={{alignItems:"center"
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
              fontFamily: Fonts.PlayfairDisplay600,
            }}>
            furniture
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopGallary;
