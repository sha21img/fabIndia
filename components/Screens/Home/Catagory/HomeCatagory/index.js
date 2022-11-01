import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopGallery from './TopGallery';
import {Colors} from '../../../../../assets/Colors';
import StoriesCard from '../../../../Common/StoriesCard';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import PointDetailCard from '../../../../Common/PointDetailCard';
import {HomeCatagoryTab4} from '../../../../../constant';
import CommonTopTab from '../../../../Common/CommonTopTab';
import LifeStyleCard from './LifeStyleCard';

export default function HomeCatagory() {
  const StoriesCardData = [
    {
      Image: image.homeStoryCardPic,
      description: 'Tanya mixes and matches bed linen to create a cozy rooms',
    },
  ];
  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            // fontFamily: Fonts.LaBelleAurore400,
            color: '#ffffff',
            fontSize: 60,
            marginRight: 10,
          }}>
          Style
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Barlow400,
            color: '#ffffff',
            fontSize: 30,
          }}>
          STORIES
        </Text>
      </View>
    );
  };

  // Tab4
  const PointDetailCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <PointDetailCard />
          <PointDetailCard />
        </ScrollView>
      </>
    );
  };
  const screenObj4 = {
    'Meals at Home': PointDetailCardList,
    'Room Makeover': PointDetailCardList,
    Staycation: PointDetailCardList,
  };
  const dataMap4 = HomeCatagoryTab4.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}>
      <TopGallery />
      <LifeStyleCard />
      <View style={{marginLeft: 15, height: 520}}>
        <CommonTopTab data={dataMap4} />
      </View>
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40, backgroundColor: '#908EA6'}}
      />
    </ScrollView>
  );
}
