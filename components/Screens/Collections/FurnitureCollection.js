import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import NameCard from '../../Common/NameCard';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';

const data = [
  {banner: image.manCarousel, title: 'Curtains'},
  {banner: '', title: 'Home Decor'},
  {banner: '', title: 'Bed Linen'},
  {banner: image.manCarousel, title: 'Tableware'},
  {banner: image.manCarousel, title: 'Curtains'},
  {banner: '', title: 'Home Decor'},
];
export default function FurnitureCollection() {
  const circleNameCard = data.map(item => {
    return (
      <ImageBackground
        key={Math.random() * 777266}
        resizeMode="cover"
        source={item.banner}
        style={{
          width: '100%',
          height: 175,
          backgroundColor: Colors.primarycolor,
          justifyContent: 'center',
          alignItems: 'center',
        //   margin: 5,
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
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        //   paddingVertical: 5,
        //   height: 385,
        //   flexDirection: 'column',
        //   paddingHorizontal: 10,
          flexWrap: 'wrap',
        }}>
        {circleNameCard}
      </ScrollView>
    </>
  );
}
