import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import WomenCollection from './WomenCollection';
import {Colors} from '../../../assets/Colors';
import {CollectionWomenData, KidsTableData2} from '../../../constant';
import CommonTopTab from '../../Common/CommonTopTab';
import Card from '../../Common/Card';
import KidsCards from './KidsCards';
import MenCollection from './MenCollection';
import Accessories from './Accessories';
import HomeProductCategory from './HomeProductCategory';
import FurnitureCollection from './FurnitureCollection';
import ArCarousel from '../../Common/ArCarousel';
import {image} from '../../../assets/images';
import Videos from '../../Common/Videos';
import Fonts from '../../../assets/fonts';
import TopVideo from './TopVideo';
const width = Dimensions.get('window').width;

const data = [
  {
    banner: image.WomenCarousel,
  },
  {
    banner: image.WomenCarousel,
  },
];

export default function Collections() {
  const CardCompo = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <Card
            offer="20"
            originalprice="1,000"
            customViewStyle={{marginRight: 10}}
          />
          <Card customViewStyle={{marginRight: 10}} />
        </ScrollView>
      </>
    );
  };
  // Tab 1
  const screenObj = {
    Dupattas: CardCompo,
    Kurtas: CardCompo,
    Saris: CardCompo,
    Lehengas: CardCompo,
  };
  const dataMap = CollectionWomenData.map(item => ({
    name: item,
    screen: screenObj[item],
  }));

  const HomeScreen2 = item => {
    return <ArCarousel data={data} width={width / 1.07} height={380} />;
  };
  const screenObj3 = {
    Bestsellers: HomeScreen2,
    Furniture: HomeScreen2,
    'Games & Toys': HomeScreen2,
  };
  const dataMap2 = KidsTableData2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const text = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#C57B31',
            paddingVertical: 10,
            paddingHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '10%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700,
              fontSize: 30,
              color: 'white',
            }}>
            AJRAKH
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 22,
              color: 'white',
              marginTop: 5,
            }}>
            Celebrating Traditions
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
        }}>
        <TopVideo />
        <WomenCollection customStyle={{paddingVertical: 15}} />
        <CommonTopTab data={dataMap} />
        <KidsCards customStyle={{paddingTop: 20}} />
        <CommonTopTab data={dataMap} />
        <MenCollection customStyle={{paddingTop: 20}} />
        <CommonTopTab data={dataMap} />
        <Accessories customStyle={{paddingTop: 20}} />
        <CommonTopTab data={dataMap} />
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay600Italic,
              fontSize: 22,
              color: Colors.textcolor,
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}>
            The story of our Ajrakh craft
          </Text>
          <Videos
            text={text}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </View>
        <HomeProductCategory customStyle={{marginTop: 10}} />
        <CommonTopTab data={dataMap} />
        <FurnitureCollection customStyle={{marginTop: 10}} />
        <CommonTopTab data={dataMap} />

        <CommonTopTab data={dataMap2} />
      </ScrollView>
    </>
  );
}
