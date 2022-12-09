import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {image} from '../../../assets/images';
import {Styles} from './style';

const KidsEventDiwali = ({title, data, customViewStyle = {}}) => {
  const Cards = data.map((item, index) => {
    return (
      <ImageBackground
        source={item.banner}
        style={[
          Styles.ImageBackContainer,
          {marginTop: index % 2 != 0 ? 60 : 24},
        ]}>
        <View style={Styles.CardTextContainer}>
          <Text style={Styles.CardText}>{item.name}</Text>
        </View>
      </ImageBackground>
    );
  });
  return (
    <View style={[Styles.Container, customViewStyle]}>
      <Image source={image.KidsTopDesign} style={Styles.ImageContainer} />
      {title()}
      <View>
        <ScrollView horizontal>{Cards}</ScrollView>
      </View>
    </View>
  );
};

export default KidsEventDiwali;
