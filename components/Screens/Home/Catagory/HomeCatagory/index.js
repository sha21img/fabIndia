import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopGallery from './TopGallery';
import {Colors} from '../../../../../assets/Colors';
import StoriesCard from '../../../../Common/StoriesCard';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import PointDetailCard from '../../../../Common/PointDetailCard';
import {HomeCatagoryTab4, HomeCatagoryTab3} from '../../../../../constant';
import CommonTopTab from '../../../../Common/CommonTopTab';
import LifeStyleCard from './LifeStyleCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import SimpleCard from '../../../../Common/SimpleCard';
const width = Dimensions.get('window').width;

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
  // Tab 3
  const SimpleCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <SimpleCard />
          <SimpleCard />
        </ScrollView>
      </>
    );
  };
  const screenObj3 = {
    'Table Covers': SimpleCardList,
    'Table Napkins': SimpleCardList,
    Runners: SimpleCardList,
    Mats: SimpleCardList,
  };
  const dataMap3 = HomeCatagoryTab3.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
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

  const SummerCarouselData = [
    {
      heading_btn: () => SummerCarousel(),
      banner: image.manCarousel,
    },
    {
      heading_btn: () => SummerCarousel(),
      banner: image.manCarousel,
    },
  ];
  const SummerCarousel = () => {
    return (
      <>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            lineHeight: 35,
            fontFamily: Fonts.PlayfairDisplay400Italic,
          }}>
          Set for the summer?
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 18,
            lineHeight: 21,
            color: 'white',
            paddingVertical: 5,
            paddingRight: 10,
          }}>
          Bring some an elegant mix of bath and bed linen
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 40,
            position: 'absolute',
            left: 20,
            bottom: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#903233',
              fontFamily: Fonts.Assistant400,
            }}>
            Explore collection
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}>
      <TopGallery />
      <View style={{marginLeft: 15, height: 440}}>
        <CommonTopTab data={dataMap3} />
      </View>
      <CommonCarousel
        data={SummerCarouselData}
        width={width / 1.07}
        height={410}
        customStyle={{paddingVertical: 25}}
      />
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
