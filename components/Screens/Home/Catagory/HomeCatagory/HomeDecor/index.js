import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import VerticalCard from './VerticalCard';
import {image} from '../../../../../../assets/images';
import HorizontalCard from './HorizontalCard';
import {Styles} from './styles';
const BrightVerticalCardData = [
  {banner: image.HomeDecor1, title: 'Decor signatures'},
  {banner: image.HomeDecor2, title: 'Color me happy'},
  {banner: image.HomeDecor1, title: 'Decor signatures'},
  {banner: image.HomeDecor2, title: 'Color me happy'},
];
const BrightHorizontalCardData = [
  {banner: image.HomeDecor3, title: 'Table, set, go!'},
  {banner: image.HomeDecor4, title: 'Bed Linen'},
  {banner: image.HomeDecor3, title: 'Table, set, go!'},
  {banner: image.HomeDecor4, title: 'Bed Linen'},
];

export default function HomeDecor({customstyle = {}, heading, description}) {
  return (
    <View style={[Styles.container, customstyle]}>
      <View style={Styles.backgroundContainer} />
      <View style={Styles.headingBox}>
        <Text style={Styles.headingText}>{heading}</Text>
        <Text style={Styles.headingDescription}>{description}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 5, paddingLeft: 15}}>
        {BrightHorizontalCardData.map(item => {
          return <HorizontalCard item={item} />;
        })}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 5, paddingLeft: 15}}>
        {BrightVerticalCardData.map((item, index) => {
          return <VerticalCard item={item} index={index} />;
        })}
      </ScrollView>
    </View>
  );
}
