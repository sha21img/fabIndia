import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {image} from '../../../../../assets/images';
import {Styles} from './style';

export default function MenCard() {
  return (
    <View style={Styles.container}>
      <Image
        source={image.EventFlower}
        style={[Styles.backgroundImage, {left: 0}]}
      />
      <Image
        source={image.EventFlower}
        style={[
          Styles.backgroundImage,
          {right: 0, transform: [{rotate: '180deg'}]},
        ]}
      />
      <View style={Styles.headingBox}>
        <Text style={Styles.headingText}>MEN</Text>
        <Text style={Styles.description}>
          Make Happy Dussehra, Happier! Shop from the choiciest range of men’s
          apparel & accesories and look stunning!
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.sliderContainer}>
        {['Shirts', 'Kurtas', 'Jeans'].map(item => {
          return (
            <ImageBackground
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              style={Styles.imageDime}
              source={image.menCard}>
              <Text style={Styles.cardText}>{item}</Text>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
}
