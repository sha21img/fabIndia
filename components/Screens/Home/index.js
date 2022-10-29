import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {image} from '../../../assets/images';
import CommonBanner from '../../Common/CommonBanner';
import Chip from '../../Common/Chip';
import CommonTopTab from '../../Common/CommonTopTab';
import {
  WomenTabdata,
  MenTabdata,
  OfferTabData,
  HomeTabdata,
} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';
import Legacy from './Legacy';
import Card from '../../Common/Card';
import OfferForYou from './OfferForYou';
import StateCategory from './StateCategory';

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard1, title: 'Tunics'},
  {image: image.womenCard1, title: 'Tops'},
];
const MenHighlightData = [
  {image: image.menCard, title: 'Shirts'},
  {image: image.menCard1, title: 'Kurtas'},
  {image: image.menCard1, title: 'Trousers'},
];
const HomeHighlightData = [
  {image: image.homeCard, title: 'Home Linen'},
  {image: image.homeCard1, title: 'Furniture'},
  {image: image.homeCard1, title: 'Home Decor'},
];

const WomenCarouselData = [
  {
    heading: 'SUMMER',
    text: 'Dresses',
    image: image.WomenCarousel,
  },
  {
    heading: 'WINTER',
    text: 'Dresses',
    image: image.WomenCarousel,
  },
];
const MenCarouselData = [
  {
    heading: 'SUMMER',
    text: 'Dresses',
    image: image.manCarousel,
  },
  {
    heading: 'WINTER',
    text: 'Dresses',
    image: image.manCarousel,
  },
];
const HomeCarouselData = [
  {
    heading: 'STAYCATION',
    text: '',
    image: image.HomeCarousel,
  },
  {
    heading: 'WINTER',
    text: '',
    image: image.HomeCarousel,
  },
];
const bannerHeading1 = () => {
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
const bannerHeading2 = () => {
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
const HomeScreen = item => {
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <Card customViewStyle={{marginRight: 10}} />
        <Card customViewStyle={{marginRight: 10}} />
      </ScrollView>
    </>
  );
};
export default function Dashbord() {
  const [active, setActive] = React.useState('Bestsellers');

  // Tab 1
  const screenObj = {
    Saris: HomeScreen,
    Tunics: HomeScreen,
    Kurtas: HomeScreen,
    Dresses: HomeScreen,
    TopsShirts: HomeScreen,
    Pants: HomeScreen,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  // Tab 2
  const screenObj1 = {
    Shirts: HomeScreen,
    Kurtas: HomeScreen,
    FaceMasks: HomeScreen,
    NehruJacketsBlazers: HomeScreen,
    Pants: HomeScreen,
  };
  const dataMap1 = MenTabdata.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  // Tab 3
  const screenObj2 = {
    Women: HomeScreen,
    Men: HomeScreen,
    Kids: HomeScreen,
    HomeLinen: HomeScreen,
    HomeDecor: HomeScreen,
  };
  const dataMap2 = OfferTabData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  // Tab 4
  const screenObj3 = {
    HomeLinen: HomeScreen,
    Furniture: HomeScreen,
    HomeDecor: HomeScreen,
  };
  const dataMap3 = HomeTabdata.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));

  const handleClick = data => {
    setActive(data);
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#E5E5E5',
          flexGrow: 1,
        }}>
        {/* <Header /> */}
        <Catagory />
        <NewHighlights title="Women" data={WomenHighlightData} />
        <CommonCarousel data={WomenCarouselData} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <Chip
            title="Bestsellers"
            handleClick={() => handleClick('Bestsellers')}
            active={active}
          />
          <Chip
            title="Recommended for you"
            handleClick={() => handleClick('Recommended for you')}
            active={active}
          />
        </View>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <CommonBanner
          heading={bannerHeading1}
          desciption="Bring home Fabindia products that are designed by you, for you!"
          buttonText="Customize now"
          bgImage={image.banner1}
        />
        <CommonBanner
          heading={bannerHeading2}
          desciption="Add a personal touch to your home linen with our new monogram service!"
          buttonText="Add a monogram"
          bgImage={image.banner1}
        />
        <NewHighlights title="Men" data={MenHighlightData} />
        <CommonCarousel data={MenCarouselData} />
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
            active={active}
          />
          <Chip
            title="Recommended for you"
            handleClick={() => handleClick('Recommended for you')}
            active={active}
          />
        </View>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap1} />
        </View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            paddingHorizontal: 15,
            paddingTop: 20,
          }}>
          Offers for you
        </Text>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap2} />
        </View>
        <Interior />
        <StateCategory />
        <NewHighlights title="HOME" data={HomeHighlightData} />
        <CommonCarousel data={HomeCarouselData} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <Chip
            title="Bestsellers"
            handleClick={() => handleClick('Bestsellers')}
            active={active}
          />
          <Chip
            title="Recommended for you"
            handleClick={() => handleClick('Recommended for you')}
            active={active}
          />
        </View>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap3} />
        </View>
        <Legacy />
      </ScrollView>
    </>
  );
}
