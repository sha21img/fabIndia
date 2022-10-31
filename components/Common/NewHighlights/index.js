import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {image} from '../../../assets/images';

export default function NewHighlights({heading = '', title = '', data = []}) {
  const width = Dimensions.get('window').width;
  const imageCard = data.map(item => {
    return (
      <View key={Math.random() * 987} style={Styles.imageBox}>
        <Image style={Styles.image} source={item.image} />
        <Text
          style={{
            color: '#4A4A4A',
            fontWeight: '400',
            fontSize: 16,
            paddingVertical: 5,
          }}>
          {item.title}
        </Text>
      </View>
    );
  });
  const hasSpaces = str => {
    if (str.indexOf(' ') !== -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={Styles.container}>
      <View
        style={[
          Styles.textBox,
          hasSpaces(title) ? {width: width / 3} : {width: null},
        ]}>
        <Text style={Styles.newText}>{heading}</Text>
        <Text style={Styles.title}>{title}</Text>
      </View>
      <View style={Styles.imageContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.ScrollView}>
          {imageCard}
        </ScrollView>
      </View>
    </View>
  );
}
