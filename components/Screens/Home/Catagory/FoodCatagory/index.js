import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopGallery from './TopGallary';
import {Colors} from '../../../../../assets/Colors';
import SummerGalary from '../../../../Common/SummerGalary';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {
  FoodCatagoryTab1,
  FoodCatagoryTab2,
  FoodCatagoryTab3,
} from '../../../../../constant';
import SimpleCard from '../../../../Common/SimpleCard';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import CommonCarousel from '../../../../Common/CommonCarousel';
import LifeStyleCard from './LifeStyleCard';
import StoriesCard from '../../../../Common/StoriesCard';
import PointDetailCard from '../../../../Common/PointDetailCard';
import FoodReceips from './FoodReceips';
const width = Dimensions.get('window').width;

export default function FoodCatagory() {
  const [active, setActive] = React.useState('Bestsellers');

  const SummerGalaryData = [
    {image: image.FoodPhoto4, name: 'Spices, Seasonings & Masalas'},
    {image: image.FoodPhoto3, name: 'Preserves'},
    {image: image.FoodPhoto2, name: 'Tea, Coffee & Beverages'},
    {image: image.FoodPhoto1, name: 'Pickles & Chutneys'},
  ];
  const getSummerTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Food, glorious food!
      </Text>
    );
  };
  const HomeProductData = [
    {image: image.FoodPhoto4, name: 'Flavoured Tea'},
    {image: image.FoodPhoto3, name: 'Herbal Infusions'},
    {image: image.FoodPhoto2, name: 'Tulsi Tea'},
    {image: image.FoodPhoto1, name: 'Green Tea'},
  ];
  const getSummerTitle1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        All about tea
      </Text>
    );
  };
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
  // Tab 1
  const screenObj1 = {
    'Spices, Seasonings & Masalas': SimpleCardList,
    Tea: SimpleCardList,
    Preserves: SimpleCardList,
  };
  const dataMap1 = FoodCatagoryTab1.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  // Tab 2
  const screenObj2 = {
    'Tulsi Tea': SimpleCardList,
    'Herbal Infusions': SimpleCardList,
    'Green Tea': SimpleCardList,
    'Flavoured Tea': SimpleCardList,
  };
  const dataMap2 = FoodCatagoryTab2.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  // Tab 2
  const screenObj3 = {
    'Healthy Living': PointDetailCardList,
    'Snacking Sundays': PointDetailCardList,
    'Wholesome meals': PointDetailCardList,
  };
  const dataMap3 = FoodCatagoryTab3.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  // // // //
  const getOfferTitleHeading = () => {
    return (
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.PlayfairDisplay700Italic,
          color: '#ffffff',
          lineHeight: 35,
        }}>
        Handcrafted
      </Text>
    );
  };
  const getDescription = () => {
    return (
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.Assistant400,
          color: '#ffffff',
        }}>
        CUSHIONS
      </Text>
    );
  };
  const OfferData = [
    {
      offerValue: '70',
      banner: image.HomeCarousel1,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
    },
    {
      offerValue: '70',
      banner: image.HomeCarousel,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
    },
  ];

  const WomenCarouselText = () => {
    return (
      <>
        <View>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay400Italic,
              fontSize: 26,
              color: 'white',
            }}>
            Salad Dressings
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              color: 'white',
              marginTop: 5,
            }}>
            Add some flavoured dressing to make your salads taste fabulous
          </Text>
        </View>
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

  const WomenCarouselData = [
    {
      heading_btn: () => WomenCarouselText(),
      banner: image.FoodCarousel,
    },
    {
      heading_btn: () => WomenCarouselText(),
      banner: image.FoodCarousel,
    },
  ];
  const handleClick = data => {
    setActive(data);
  };
  const ReceipsCardData = [
    {
      title: 'Healthy rava upma',
      banner: image.FoodReceips1,
    },
    {
      title: 'Lettuce & tomato salad',
      banner: image.FoodReceips2,
    },
  ];
  const ReceipsCardHeading = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: Fonts.RunWildDemo,
            color: '#ffffff',
            fontSize: 60,
            lineHeight: 60,
          }}>
          Fab
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant300,
            color: '#ffffff',
            fontSize: 40,
            lineHeight: 52,
          }}>
          RECIPES
        </Text>
      </>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}>
      <TopGallery />
      <SummerGalary
        data={SummerGalaryData}
        title={getSummerTitle()}
        subtitles="All things natural, organic and healthy"
        backgroundColor="#EFE5E0"
        customViewStyle={{marginBottom: 50}}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 5,
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
      <View style={{marginLeft: 15, height: 440}}>
        <CommonTopTab data={dataMap1} />
      </View>
      <OfferCommonCarousel
        data={OfferData}
        UptoText="UPTO"
        backgroundColor={'#DB8C5F'}
        width={width / 1.07}
        height={420}
        customStyle={{marginVertical: 20}}
      />
      <SummerGalary
        data={HomeProductData}
        title={getSummerTitle1()}
        subtitles="Rejuvenate every morning!"
        backgroundColor="#EFE5E0"
        customViewStyle={{marginBottom: 50, marginTop: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 5,
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
      <View style={{marginLeft: 15, height: 440}}>
        <CommonTopTab data={dataMap2} />
      </View>
      <CommonCarousel data={WomenCarouselData} width={width} height={410} />
      <SummerGalary
        data={HomeProductData}
        title={getSummerTitle1()}
        subtitles="Rejuvenate every morning!"
        backgroundColor="#EFE5E0"
        customViewStyle={{marginBottom: 50, marginTop: 20}}
      />
      <LifeStyleCard />
      <View style={{marginLeft: 15, height: 520}}>
        <CommonTopTab data={dataMap3} />
      </View>
      <FoodReceips
        heading={ReceipsCardHeading}
        customStyle={{backgroundColor: '#CFA566'}}
        data={ReceipsCardData}
      />
    </ScrollView>
  );
}
