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
import {dataTab, dataTab1} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';

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
const HomeScreen = item => {
  return (
    <>
      <View>
        <Text>dfg</Text>
      </View>
    </>
  );
};
export default function Dashbord() {
  const [active, setActive] = React.useState('Bestsellers');
  const screenObj = {
    Home: HomeScreen,
    Settings: HomeScreen,
    asdfadsfasdasdasdasd: HomeScreen,
  };
  const dataMap = dataTab.map(item => ({name: item, screen: screenObj[item]}));
  const screenObj1 = {Home: HomeScreen, Settings: HomeScreen};
  const dataMap1 = dataTab1.map(item => ({
    name: item,
    screen: screenObj1[item],
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
          // height:'100%'
          // paddingBottom: 100,
          // flex: 1,
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
        <View style={{height: 400}}>
          <CommonTopTab data={dataMap} />
        </View>
        <CommonBanner
          heading={heading1}
          desciption="Bring home Fabindia products that are designed by you, for you!"
          buttonText="Customize now"
          bgImage={image.banner1}
        />
        <CommonBanner
          heading={heading2}
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
        <View style={{height: 100}}>
          <CommonTopTab data={dataMap} />
        </View>
        <Interior />
      </ScrollView>
    </>
  );
}
