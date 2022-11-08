import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Catagory from '../Home/Catagory';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {hasSpaces, WomenTabdata} from '../../../constant';
import NewHighlights from '../../Common/NewHighlights';
import Chip from '../../Common/Chip';
import Card from '../../Common/Card';
import CommonTopTab from '../../Common/CommonTopTab';
import SummerGalary from '../../Common/SummerGalary';
const width = Dimensions.get('window').width;

const categoryData = [
  {
    route: 'WomenCategory',
    title: 'Women',
    textColor: 'white',
    bgColor: '#792C27',
  },
  {
    route: 'MenCatagory',
    title: 'Men',
    textColor: Colors.primarycolor,
    bgColor: 'white',
  },
  {
    route: 'KidsCatagory',
    title: 'Kids',
    textColor: Colors.primarycolor,
    bgColor: 'white',
  },
  {
    route: 'HomeCatagory',
    title: 'Home Linen',
    textColor: Colors.primarycolor,
    bgColor: 'white',
  },
  {
    route: 'FurnitureCategory',
    title: 'Furniture',
    textColor: 'white',
    bgColor: '#792C27',
  },
  {
    route: 'HomeDecorCatagory',
    title: 'Home Decor',
    textColor: 'white',
    bgColor: '#792C27',
  },
  {
    route: 'BeautyCategory',
    title: 'Beauty',
    textColor: 'white',
    bgColor: '#792C27',
  },
  {
    route: 'FoodCatagory',
    title: 'Food',
    textColor: 'white',
    bgColor: '#792C27',
  },
  {
    route: '',
    title: 'INTERIOR DESIGN Studio',
    textColor: 'white',
    bgColor: '#D7AF49',
  },
  {
    route: 'MonogramCatagory',
    title: 'Add a Monogram',
    textColor: 'white',
    bgColor: '#D7AF49',
  },
  {
    route: 'CustomizeCatagory',
    title: 'Customize',
    textColor: 'white',
    bgColor: '#D7AF49',
  },
];
const SummerGalaryData = [
  {image: image.BeautyProduct1, name: 'Skincare'},
  {image: image.BeautyProduct2, name: 'Haircare'},
  {image: image.BeautyProduct3, name: 'Fragrances'},
  {image: image.BeautyProduct4, name: 'Makeup'},
];

export default function Offers() {
  const [active, setActive] = React.useState('Saris');
  const getTitle = (title, heading) => {
    return (
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces(heading) ? {width: width / 3} : {width: null},
        ]}>
        <Text
          style={{
            fontSize: 14,
            color: '#4A4A4A',
            fontFamily: Fonts.Assistant300,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: '#4A4A4A',
            fontSize: 18,
            fontFamily: Fonts.Assistant400,
          }}>
          {heading}
        </Text>
      </View>
    );
  };
  const WomenHighlightData = [
    {image: image.womenCard, title: 'Saris'},
    {image: image.womenCard1, title: 'Tunics'},
    {image: image.womenCard1, title: 'Tops'},
  ];
  const handleClick = data => {
    setActive(data);
  };
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
    Saris: CardCompo,
    Tunics: CardCompo,
    Kurtas: CardCompo,
    Dresses: CardCompo,
    'Tops Shirts': CardCompo,
    Pants: CardCompo,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));

  const getSummerTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Offers on FabCollections
      </Text>
    );
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%'}}
          source={image.OfferCategoryBanner}>
          <Catagory data={categoryData} />
        </ImageBackground>
        <NewHighlights
          title={getTitle('', 'UPTO 70% OFF')}
          data={WomenHighlightData}
          bgColor={{backgroundColor: '#F3E0E0'}}
          customStyle={{marginVertical: 10}}
        />
        <NewHighlights
          title={getTitle('', 'UPTO 50% OFF')}
          data={WomenHighlightData}
          bgColor={{backgroundColor: '#F3E0E0'}}
          customStyle={{marginVertical: 10}}
        />
        <NewHighlights
          title={getTitle('', 'UPTO 30% OFF')}
          data={WomenHighlightData}
          bgColor={{backgroundColor: '#F3E0E0'}}
          customStyle={{marginVertical: 10}}
        />
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 30,
            paddingTop: 20,
            lineHeight: 40,
            paddingHorizontal: 15,
            color: Colors.textcolor,
          }}>
          Best in offers
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <Chip
            title="Saris"
            handleClick={() => handleClick('Bestsellers')}
            active={active}
          />
          <Chip
            title="Skirts & Lehengas"
            handleClick={() => handleClick('Recommended for you')}
            active={active}
          />
          <Chip
            title="Tunics & Shirts"
            handleClick={() => handleClick('Tunics & Shirts')}
            active={active}
          />
        </View>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <SummerGalary
          data={SummerGalaryData}
          title={getSummerTitle()}
          subtitles="Starting from 10% off"
          backgroundColor="#EFE5E0"
          customViewStyle={{paddingTop: 30}}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
          }}>
          <Chip
            title="Saris"
            handleClick={() => handleClick('Bestsellers')}
            active={active}
          />
          <Chip
            title="Skirts & Lehengas"
            handleClick={() => handleClick('Recommended for you')}
            active={active}
          />
          <Chip
            title="Tunics & Shirts"
            handleClick={() => handleClick('Tunics & Shirts')}
            active={active}
          />
        </View>
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
      </ScrollView>
    </>
  );
}
