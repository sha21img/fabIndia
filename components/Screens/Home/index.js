import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {image} from '../../../assets/images';
import CommonBanner from '../../Common/CommonBanner';
// import SkeletonContent from 'react-native-skeleton-content';

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard, title: 'Tunics'},
  {image: image.womenCard, title: 'Tops'},
];
const MenHighlightData = [
  {image: image.womenCard, title: 'Shirts'},
  {image: image.womenCard, title: 'Kurtas'},
  {image: image.womenCard, title: 'Trousers'},
];

const WomenCarouselData = [
  {
    heading: 'SUMMER',
    text: 'Dresses',
    image: image.womenCard,
  },
  {
    heading: 'WINTER',
    text: 'Dresses',
    image: image.womenCard,
  },
];
const MenCarouselData = [
  {
    heading: 'SUMMER',
    text: 'Dresses',
    image: image.womenCard,
  },
  {
    heading: 'WINTER',
    text: 'Dresses',
    image: image.womenCard,
  },
];
const heading1 = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 26, fontWeight: '700', color: 'white'}}>
        CUSTOMIZE
      </Text>
      <Text style={{fontSize: 26, paddingLeft: 4, color: 'white'}}>
        YOUR OWN
      </Text>
    </View>
  );
};
const heading2 = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 26, fontWeight: '300', color: 'white'}}>
        ADD A
      </Text>
      <Text
        style={{
          fontSize: 26,
          fontWeight: '900',
          paddingLeft: 4,
          color: 'white',
        }}>
        MONOGRAM
      </Text>
    </View>
  );
};
export default function Dashbord() {
  return (
    <>
      <ScrollView>
        {/* <Header /> */}
        <Catagory />
        <NewHighlights title="Women" data={WomenHighlightData} />
        <CommonCarousel data={WomenCarouselData} />
        <CommonBanner
          heading={heading1}
          desciption="Bring home Fabindia products that are designed by you, for you!"
          buttonText="Customize now"
          bgImage={image.womenCard}
        />
        <CommonBanner
          heading={heading2}
          desciption="Add a personal touch to your home linen with our new monogram service!"
          buttonText="Add a monogram"
          bgImage={image.womenCard}
        />
        <NewHighlights title="Men" data={MenHighlightData} />
        <CommonCarousel data={MenCarouselData} />
      </ScrollView>
    </>
  );
}
