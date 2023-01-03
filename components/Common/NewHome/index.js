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
          <Text style={Styles.cardText}>{item.Footer}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#F3ECE8',
          width: '100%',
          height: '80%',
          position: 'absolute',
        }}
      />
      {title()}
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: 330,
          }}>
          {Card}
        </ScrollView>
      </View>
    </View>
  );
};
export default NewHome;
