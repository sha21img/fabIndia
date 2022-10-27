import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {image} from '../../../assets/images';

export default function NewHighlights({title = '', data = []}) {
  const imageCard = data.map(item => {
    return (
      <>
        <View key={Math.random()} style={Styles.imageBox}>
          <Image style={item.image} source={image.womenCard} />
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
      </>
    );
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.textBox}>
        <Text style={Styles.newText}>New in</Text>
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
