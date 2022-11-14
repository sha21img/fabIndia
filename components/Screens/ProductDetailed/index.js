import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonCarousel from '../../Common/CommonCarousel';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import Size_Color from './Size_Color';
const width = Dimensions.get('window').width;

export default function ProductDetailed() {
  const WomenCarouselData = [
    {
      heading_btn: () => WomenCarouselText(),
      banner: image.WomenCarousel,
    },
    {
      heading_btn: () => WomenCarouselText(),
      banner: image.WomenCarousel,
    },
  ];
  const WomenCarouselText = () => {
    return <></>;
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <CommonCarousel data={WomenCarouselData} width={width} height={360} />
      <Details />
      <Size_Color customStyle={{marginVertical: 15}} />
    </ScrollView>
  );
}
