import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './style';

const NewTrendy = ({title}) => {
  return (
    <>
      <View style={Styles.SmallView}>
        <Text
          style={{
            fontSize: 30,
            lineHeight: 30,
            fontFamily: Fonts.PlayfairDisplay400Italic,
            color: '#ffffff',
          }}>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 30,
              fontFamily: Fonts.PlayfairDisplay400,
              color: '#ffffff',
            }}>
            All things
          </Text>{' '}
          new & trendy
        </Text>
        <Image source={image.GroupDots} style={Styles.DotContainer1} />
        <Image source={image.GroupDots} style={Styles.DotContainer2} />
      </View>
      <Image source={image.TrendyDesign} style={Styles.Design} />
    </>
  );
};

export default NewTrendy;
