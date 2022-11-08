import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';

const data = [
  {banner: image.manCarousel, title: 'Curtains'},
  {banner: image.manCarousel, title: 'Tableware'},
  {banner: image.manCarousel, title: 'Curtains'},
  {banner: image.manCarousel, title: 'Curtains'},
];
export default function FurnitureCollection() {
  const circleNameCard = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 777266}
        resizeMode="cover"
        source={item.banner}
        style={{
          width: index == 1 || index == 2 ? width / 2.05 : '100%',
          height: 180,
          backgroundColor: Colors.primarycolor,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 20,
            lineHeight: 27,
            color: 'white',
          }}>
          {item.title}
        </Text>
      </ImageBackground>
    );
  });
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          paddingHorizontal: 15,
        }}>
        Home
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 28,
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        Add a dash of tradition to your home with our latest Ajarakh collection{' '}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        {circleNameCard}
      </ScrollView>
    </>
  );
}
