import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import Fonts from '../../../../../assets/fonts';
import { image } from '../../../../../assets/images';
import { Furniture2, KidsTableData2 } from '../../../../../constant';
import ArCarousel from '../../../../Common/ArCarousel';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import CornerGallery from '../../../../Common/CornerGallery';
import {Styles} from './style';
import TopGallary from './TopGallary';
const width = Dimensions.get('window').width;
const FurnitureCategory = () => {
    const [active, setActive] = React.useState()
  const CornerGalleryHeader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          fontWeight: '600',
          lineHeight: 40,
          color:"#ffffff"
        }}>
        A piece for every corner
      </Text>
    );
  };
  const CornerGallerySubheader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          fontWeight: '400',
          lineHeight: 26,
          color:"#ffffff"
        }}>
        Furniture that’s art
      </Text>
    );
  };

  const data = [
    {
      // heading: () => WomenCarouselText(),
      banner: image.WomenCarousel,
      // buttonText: 'Explore now',
    },
    {
      // heading: () => WomenCarouselText(),
      banner: image.WomenCarousel,
      // buttonText: 'Explore now',
    },
  ];

  const HomeScreen2 = item => {
    return <ArCarousel key={Math.random()*22983} data={data} width={width} height={380} />;
  };

  const screenObj3 = {
    'Living Room': HomeScreen2,
    Dining: HomeScreen2,
    Bedroom: HomeScreen2,
    'Study Room': HomeScreen2,
  };

  const dataMap2 = Furniture2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));

  const handleClick = data => {
    setActive(data);
  };

  const CornerGalleryData=[
    {
        image:image.furniture3,
        name:'Living'
    },
    {
        image:image.furniture4,
        name:'Dining'
    },
    {
        image:image.furniture2,
        name:'Bedroom'
    },
    {
        image:image.furniture3,
        name:'Living'
    },
    {
        image:image.furniture4,
        name:'Dining'
    },
    {
        image:image.furniture2,
        name:'Bedroom'
    },
  ]
  return (
    <ScrollView>
      {/* ==========Top Gallery ============== */}
      <TopGallary />
      {/* ==========Corner Gallery ============== */}
      <CornerGallery
        header={CornerGalleryHeader}
        subHeader={CornerGallerySubheader}
        data={CornerGalleryData}
      />
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      <View
        style={{
          height: 450,
          paddingHorizontal: 15,
          backgroundColor: '#ffffff',
          marginBottom:10
        }}>
        <CommonTopTab data={dataMap2} />
      </View>
    </ScrollView>
  );
};
export default FurnitureCategory;
