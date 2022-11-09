import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {getColor} from '../../../constant';
import {image} from '../../../assets/images';

const ColorCard = ({getBox = null, getTitles = null, cardData = []}) => {
  return (
    <View style={Styles.cardbox}>
      <Text style={Styles.cardtxt}>What’s your color?</Text>
      <ImageBackground
        onLoadStart={async () => {
          const color = await getColor(image.huesblue);
          console.log('color', color);
          //   setImageColors(color);
        }}
        resizeMode="cover"
        source={image.huesblue}
        style={Styles.backgoundimage}>
        <View style={Styles.backgroundimagebox}>{getBox}</View>
        {getTitles}
      </ImageBackground>

      <ScrollView horizontal>
        {cardData.map(it => {
          return (
            <ImageBackground
              onLoadStart={async () => {
                const color = await getColor(image.huesblue);
                console.log('color', color);
                // setImageColors(color);
              }}
              resizeMode="cover"
              source={image.huesblue}
              style={Styles.backgoundimage1}>
              <View style={Styles.backgroundimagebox1}>{it.getBox}</View>
              {it.getTitles}
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ColorCard;
