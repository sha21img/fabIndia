import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import CommonCarousel from '../../Common/CommonCarousel';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import ProductDetail from './ProductDetail';
import CommonTopTab from '../../Common/CommonTopTab';
import Card from '../../Common/Card';
import {WomenTabdata} from '../../../constant';
import FabulousCard from '../../Common/FabulousCard';
import PopularCards from './PopularCards';
import VideoContainer from './VideoContainer';
import Footer from './Footer';
const width = Dimensions.get('window').width;

export default function FabulousCardDetails() {
  const SummerCarousel = () => {
    return <></>;
  };
  const SummerCarouselData = [
    {
      heading_btn: () => SummerCarousel(),
      banner: image.manCarousel,
    },
    {
      heading_btn: () => SummerCarousel(),
      banner: image.manCarousel,
    },
  ];
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#E5E5E5',
          flexGrow: 1,
        }}>
        <CommonCarousel data={SummerCarouselData} width={width} height={440} />
        <ProductDetail />
        <PopularCards
          customViewStyle={{paddingVertical: 10}}
          title="Style it right!"
          data={[0, 0, 0]}
          description="This cotton kurta is super comfortable, breathable and versatile. Team
          it with a pair of white PJs for the perfect work-from-home outfit, or
          with a pair of white jeans, silver danglers and juttis for a casual
          day at the office."
        />
        <VideoContainer />
        <PopularCards
          customViewStyle={{marginVertical: 20}}
          data={[0, 0, 0]}
          title="Frequently bought together"
        />
        <PopularCards
          customViewStyle={{marginVertical: 20}}
          data={[0, 0, 0]}
          title="More in Silk saris"
        />
        <PopularCards
          customViewStyle={{marginVertical: 20}}
          data={[0, 0, 0]}
          title="More in Banarasi saris"
        />
      </ScrollView>
      <Footer />
    </>
  );
}
