import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';

export default function NewHighlights({
  heading = '',
  title = null,
  data = [],
  customStyle = '',
}) {
  const width = Dimensions.get('window').width;
  const imageCard = data.map(item => {
    return (
      <View key={Math.random() * 987} style={Styles.imageBox}>
        <Image style={Styles.image} source={item.image} />
        <Text style={Styles.imageText}>{item.title}</Text>
      </View>
    );
  });

  return (
    <View style={[Styles.container, customStyle]}>
      {title}
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
