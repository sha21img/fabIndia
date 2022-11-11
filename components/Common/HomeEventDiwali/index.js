import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {image} from '../../../assets/images';
import {Styles} from './style';
const width = Dimensions.get('window').width;
const HomeEventDiwali = ({title, data, customViewStyle = {}}) => {
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
  const Cards = data.map((item, index) => {
    return (
      <ImageBackground
        source={item.banner}
        style={[
          Styles.ImageBackContainer,
          {height: count.includes(index) ? 274 : 212, width: (width - 45) / 2},
        ]}>
        <View
          style={{
            padding: 3,
            backgroundColor: 'rgba(227, 84, 16, 0.7)',
            position: 'absolute',
            left: 12,
            bottom: 10,
            borderRadius: 5,
          }}>
          <Text style={Styles.CardTextContainer}>{item.name}</Text>
        </View>
      </ImageBackground>
    );
  });
  return (
    <View style={[Styles.Container, customViewStyle]}>
      <Image source={image.HomeTopDesign} style={Styles.ImageContainer} />
      {title()}
      <View style={[Styles.CardContainer, {width: width}]}>{Cards}</View>
    </View>
  );
};

export default HomeEventDiwali;
