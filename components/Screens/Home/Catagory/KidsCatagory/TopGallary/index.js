import {View, Text, ImageBackground, Image} from 'react-native';
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
const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      {imageData.map((item, i) => {
        return (
          <ImageBackground
            key={Math.random() * 6776}
            resizeMode="cover"
            style={Styles.backgroundimg}
            source={item.image}>
            <View
              style={[
                Styles.txtbox,
                {top: i < 3 ? 15 : null, bottom: i >= 3 ? 15 : null},
              ]}>
              <Text style={Styles.imagetxt}>{item.title}</Text>
            </View>
          </ImageBackground>
        );
      })}
      <View
        style={{
          width: 160,
          height: 160,
          backgroundColor: 'rgba(144, 50, 51, 0.8)',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          borderRadius: 100,
          top: 142,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Fonts.Assistant300,
            color: '#FFFFFF',
            lineHeight: 18,
            textAlign: 'center',
          }}>
          A day in the life of a
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 6,
            alignItems: 'flex-end',
          }}>
          <Image
            source={image.whitelogo}
            style={{height: 20, width: 67}}
            resizeMode="contain"
          />
          <Text
            style={{
              color: '#FFFFFF',
              marginLeft: 3,
              fontSize: 18,
              fontFamily: Fonts.PlayfairDisplay400,
            }}>
            man
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopGallary;
