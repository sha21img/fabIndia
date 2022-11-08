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
            paddingVertical: 10,
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
    return <ArCarousel data={data} width={width / 1.09} height={380} />;
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
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
        }}>
        {/*
         
        Video

         */}
        <WomenCollection />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <KidsCards />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <MenCollection />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <Accessories />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <HomeProductCategory />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        {/*
         
        Video

         */}
        <FurnitureCollection />
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <View
          style={{
            height: 450,
            paddingHorizontal: 15,
            backgroundColor: '#ffffff',
          }}>
          <CommonTopTab data={dataMap2} />
        </View>
      </ScrollView>
    </>
  );
}
