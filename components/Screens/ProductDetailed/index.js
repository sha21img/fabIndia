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
import Popular from './Popular';
import Footer from './Footer';
import Video_title from './Video_title';
import CommonTopTab from '../../Common/CommonTopTab';
import {WomenTabdata} from '../../../constant';
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
  const DetailsData = item => {
    return (
      <>
        <View style={{backgroundColor: 'red'}}>
          <Text>sdfg</Text>
          <Text>sdfg</Text>
          <Text>sdfg</Text>
          <Text>sdfg</Text>
          <Text>sdfg</Text>
        </View>
      </>
    );
  };
  const screenObj = {
    Saris: DetailsData,
    Tunics: DetailsData,
    Kurtas: DetailsData,
    Dresses: DetailsData,
    'Tops Shirts': DetailsData,
    Pants: DetailsData,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <CommonCarousel data={WomenCarouselData} width={width} height={360} />
        <Details />
        <Size_Color customStyle={{marginVertical: 15}} />
        <CommonTopTab data={dataMap} />
        <Popular
          heading="Style it right!"
          description="This cotton kurta is super comfortable, breathable
and versatile. Team it with a pair of white PJs for the perfect work-from-home outfit, or with a pair of white jeans, silver danglers and juttis for a casual day at the office."
          data={[0, 0, 0, 0]}
          customStyle={{marginVertical: 10}}
        />
        <Video_title />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="Frequently bought together"
          data={[0, 0, 0, 0]}
        />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="More in Short kurtas"
          data={[0, 0, 0, 0]}
        />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="More in Hand Block Print Short Kurtas"
          data={[0, 0, 0, 0]}
        />
      </ScrollView>
      <Footer />
    </>
  );
}
