import React from 'react';
import {Dimensions, ScrollView, Text} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import CommonCarousel from '../../Common/CommonCarousel';
import NewTrendy from '../../Common/NewTrendy';
import WomenTrendy from '../../Common/WomenTrendy';

const width = Dimensions.get('window').width;

const NewArrivals = () => {
  const newTrandyData = () => {
    return <NewTrendy />;
  };
  const NewTrendCarouselData = [
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
  ];
  const WomenTrendCarouselData = [
    {
      Footer: 'Apparel',
      banner: image.womenPhoto1,
    },
    {
      Footer: 'Jewellery',
      banner: image.womenPhoto2,
    },
    {
      Footer: 'Footwear',
      banner: image.womenPhoto3,
    },
    {
      Footer: 'Beauty',
      banner: image.womenPhoto4,
    },
    {
      Footer: 'Beauty',
      banner: image.womenPhoto4,
    },
    {
      Footer: 'Beauty',
      banner: image.womenPhoto4,
    },
  ];
  return (
    <ScrollView>
      {/* ==========New Trendy =========== */}
      <CommonCarousel data={NewTrendCarouselData} width={width} height={380} />
      {/* ===========Women Trend========== */}
      <WomenTrendy
        data={WomenTrendCarouselData}
        title={() => (
          <Text
            style={{
              fontSize: 30,
              color: Colors.textcolor,
              marginBottom: 10,
              marginLeft: 15,
              fontFamily: Fonts.PlayfairDisplay600Italic,
            }}>
            Women
          </Text>
        )}
      />
    </ScrollView>
  );
};

export default NewArrivals;
