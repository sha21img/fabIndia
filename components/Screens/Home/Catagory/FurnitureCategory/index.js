import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';
import {Furniture2, KidsTableData2} from '../../../../../constant';
import ArCarousel from '../../../../Common/ArCarousel';
import Card from '../../../../Common/Card';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import CornerGallery from '../../../../Common/CornerGallery';
import InteriorCatagory from '../../../../Common/InteriorCatagory';
import PointDetailCard from '../../../../Common/PointDetailCard';
import StoriesCard from '../../../../Common/StoriesCard';
import TopSwiper from '../../../../Common/TopSwiper';
import Customize from './Customize';
import {Styles} from './style';
import TopGallary from './TopGallary';
const width = Dimensions.get('window').width;
const FurnitureCategory = () => {
  const [active, setActive] = React.useState();
  const [active1, setActive1] = React.useState();
  const CornerGalleryHeader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          color: '#ffffff',
        }}>
        A piece for every corner
      </Text>
    );
  };
  const CornerGalleryHeader1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          color: '#ffffff',
        }}>
        Rattan
      </Text>
    );
  };
  const CornerGallerySubheader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 26,
          color: '#ffffff',
        }}>
        Furniture that’s art
      </Text>
    );
  };
  const CornerGallerySubheader1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 26,
          color: '#ffffff',
        }}>
        A story in every weave
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
    return (
      <ArCarousel
        key={Math.random() * 22983}
        data={data}
        width={width}
        height={380}
      />
    );
  };

  const HomeScreen = item => {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <PointDetailCard />
        <PointDetailCard />
      </ScrollView>
    );
  };

  const screenObj3 = {
    'Living Room': HomeScreen2,
    Dining: HomeScreen2,
    Bedroom: HomeScreen2,
    'Study Room': HomeScreen2,
  };
  const screenObj2 = {
    'Living Room': HomeScreen,
    Dining: HomeScreen,
    Bedroom: HomeScreen,
    'Study Room': HomeScreen,
  };

  const dataMap = Furniture2.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));

  const dataMap2 = Furniture2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));

  const handleClick = data => {
    setActive(data);
  };
  const handleClick1 = data => {
    setActive1(data);
  };

  const CornerGalleryData = [
    {
      image: image.furniture3,
      name: 'Living',
    },
    {
      image: image.furniture4,
      name: 'Dining',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture3,
      name: 'Living',
    },
    {
      image: image.furniture4,
      name: 'Dining',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
  ];

  const StoriesTitle = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: Fonts.RunWildDemo,
            fontSize: 60,
            lineHeight: 60,
          }}>
          Style
        </Text>
        <Text
          style={{fontFamily: Fonts.Barlow400, fontSize: 30, lineHeight: 16}}>
          STORIES
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
      {/* ==========Top Gallery ============== */}
      {/* <TopGallary /> */}
      <TopSwiper
        data={[
          {banner: image.kidinterior1},
          {banner: image.banner1},
          {banner: image.kidinterior2},
        ]}
      />
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
          marginBottom: 10,
        }}>
        <CommonTopTab data={dataMap2} />
      </View>
      {/* =============interior Design ================ */}
      <View style={{marginVertical: 30}}>
        <InteriorCatagory buttonText={'Get in touch with us'} />
      </View>
      {/* ==============Customized ==================== */}
      <Customize
        Description={
          'Bring home your very own customized Fabindia furniture! From wood finish to upholstery, make every piece your own!'
        }
        heading={'CUSTOMIZE YOUR FURNITURE'}
      />
      {/* ==========Corner Gallery ============== */}
      <CornerGallery
        header={CornerGalleryHeader1}
        subHeader={CornerGallerySubheader1}
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
          marginBottom: 10,
        }}>
        <CommonTopTab data={dataMap2} />
      </View>
      {/* ==============Seller Chips=========== */}
      <View style={Styles.chipbox}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick1('Bestsellers')}
          active={!!active1 ? active1 : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick1('Recommended for you')}
          active={active1}
        />
      </View>
      <View style={Styles.commontab}>
        <CommonTopTab data={dataMap} />
      </View>
      {/* ===============Stories Card =========== */}
      <StoriesCard title={StoriesTitle} />
    </ScrollView>
  );
};
export default FurnitureCategory;
