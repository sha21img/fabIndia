import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../assets/fonts';
import {Styles} from './style';

const NewHome = ({data, title}) => {
  const Card = data.map((item, index) => {
    return (
      <ImageBackground
        source={item.banner}
        style={[
          Styles.cardContainer,
          {
            height: index % 3 == 0 ? 297 : 141,
            width: index % 3 == 0 ? 229 : 141,
          },
        ]}>
        <LinearGradient
          colors={['transparent', '#925D4D']}
          style={Styles.linearContainer}>
          <Text style={Styles.cardText}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={{height: 433}}>
      <View style={{height: 338, backgroundColor: '#EDE8E7'}}>
        {title()}
        <View>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'column', flexWrap: 'wrap'}}>
            {Card}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default NewHome;
