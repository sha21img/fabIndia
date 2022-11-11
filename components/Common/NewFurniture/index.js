import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../assets/fonts';
import {Styles} from './style';

const NewFurniture = ({data, title}) => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    let d = data.length;
    let odd = [];
    let even = [];
    for (var i = 0; i < d; i++) {
      if (i % 2 == 0) {
        even.push(i);
      } else {
        odd.push(i);
      }
    }
    odd = odd.filter((el, index) => index % 2 == 0);
    even = even.filter((el, index) => index % 2 != 0);
    odd = [...odd, ...even];
    setCount(odd);
  }, []);

  const Card = data.map((item, index) => {
    return (
      <ImageBackground
        source={item.banner}
        style={[
          Styles.cardContainer,
          {
            height: count.includes(index) ? 190 : 297,
            width: 190,
          },
        ]}>
        <View
          style={[Styles.linearContainer, {backgroundColor: item.bannerColor}]}>
          <Text style={Styles.cardText}>{item.name}</Text>
        </View>
      </ImageBackground>
    );
  });
  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#EDEDED',
          width: '100%',
          height: '55%',
          position: 'absolute',
        }}
      />
      {title()}
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          maxHeight: 530,
        }}>
        {Card}
      </ScrollView>
    </View>
  );
};
export default NewFurniture;
