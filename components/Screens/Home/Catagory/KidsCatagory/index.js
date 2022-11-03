import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import TopGallary from './TopGallary';
import NewHighlights from '../../../../Common/NewHighlights';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import {
  hasSpaces,
  KidsTableData,
  KidsTableData1,
  KidsTableData2,
  KidsTableData3,
  MenCatagoryTab3,
  MenCatagoryTableData,
} from '../../../../../constant';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import Card from '../../../../Common/Card';
import OfferCard from '../../../../Common/OfferCard';
import Collections from '../MenCatagory/Collections';
import LifeStyleCard from '../MenCatagory/LifeStyleCard';
import PointDetailCard from '../../../../Common/PointDetailCard';
import StoriesCard from '../../../../Common/StoriesCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import ArCarousel from '../../../../Common/ArCarousel';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
const width = Dimensions.get('window').width;

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard1, title: 'Tunics'},
  {image: image.womenCard1, title: 'Tops'},
];
const getOfferTitleHeading = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.IndieFlower,
          color: '#ffffff',
        }}>
        BIG DISCOUNTS
      </Text>
    </View>
  );
};
const getDescription = () => {
  return (
    <Text
      style={{
        fontSize: 26,
        fontFamily: Fonts.IndieFlower,
        color: '#ffffff',
      }}>
      for our little ones
    </Text>
  );
};
const OfferData = [
  {
    offerValue: '70',
    banner: image.KidsCarousel,
    heading: () => getOfferTitleHeading(),
    description: () => getDescription(),
  },
  {
    offerValue: '70',
    banner: image.KidsCarousel,
    heading: () => getOfferTitleHeading(),
    description: () => getDescription(),
  },
];
const KidsCatagory = () => {
  const [imgActive1, setImgActive1] = React.useState(0);

  const [active, setActive] = React.useState('Bestsellers');

  const getTitle = (heading, title) => {
    return (
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces(title) ? {width: width / 3} : {width: null},
        ]}>
        <Text
          style={{
            fontSize: 14,
            color: '#4A4A4A',
            fontFamily: Fonts.Assistant300,
          }}>
          {heading}
        </Text>
        <Text
          style={{
            color: '#4A4A4A',
            fontSize: 30,
            fontFamily: Fonts.IndieFlower,
          }}>
          {title}
        </Text>
      </View>
    );
  };
  const handleClick = data => {
    setActive(data);
  };
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.RunWildDemo,
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

  const HomeScreen = item => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        />
        <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        />
      </ScrollView>
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
    return <ArCarousel data={data} width={width / 1.09} height={380} />;
  };
  const screenObj1 = {
    Infants: HomeScreen,
    Girls: HomeScreen,
    Boys: HomeScreen,
  };
  const screenObj2 = {
    'Girls Kurtas': HomeScreen,
    'Boys Kurtas': HomeScreen,
    'Infants Kurtas': HomeScreen,
    Girls: HomeScreen,
  };
  const screenObj3 = {
    Bestsellers: HomeScreen2,
    Furniture: HomeScreen2,
    'Games & Toys': HomeScreen2,
  };
  const dataMap = KidsTableData.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  const dataMap1 = KidsTableData1.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  const dataMap2 = KidsTableData2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const onchangeCarousole = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive1) {
        setImgActive1(slide);
      }
    }
  };
  const HomeScreen1 = item => {
    return (
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
    );
  };
  const screenObj4 = {
    'Summer Vacation': HomeScreen1,
    Playtime: HomeScreen1,
  };
  const dataMap3 = KidsTableData3.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
  const SummerCarousel = () => {
    return (
      <>
        <Text
          style={{
            fontSize: 26,
            color: '#FFFFFF',
            lineHeight: 35,
            fontFamily: Fonts.IndieFlower,
          }}>
          The cutest #OOTDs!
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 21,
            color: '#FFFFFF',
            paddingVertical: 5,
            paddingRight: 10,
          }}>
          Get your kids ready to sieze the day!
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
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
        flexGrow: 1,
      }}>
      <TopGallary />
      <NewHighlights
        title={getTitle('', 'Infants')}
        data={WomenHighlightData}
        customStyle={{marginTop: 15}}
      />
      <NewHighlights
        title={getTitle('', 'Girls')}
        data={WomenHighlightData}
        customStyle={{marginTop: 15}}
      />
      <NewHighlights
        title={getTitle('', 'Boys')}
        data={WomenHighlightData}
        customStyle={{marginTop: 15}}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 20,
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
      <View style={{paddingLeft: 15, height: 490}}>
        <CommonTopTab data={dataMap} />
      </View>

      {/* 
      
      gallery space
      
       */}

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
      <View
        style={{
          height: 450,
          paddingHorizontal: 15,
          backgroundColor: '#ffffff',
        }}>
        <CommonTopTab data={dataMap1} />
      </View>
      <OfferCommonCarousel
        data={OfferData}
        UptoText="UPTO"
        backgroundColor={'#DB8C5F'}
        width={width}
        height={430}
        customStyle={{marginBottom: 10, marginTop: 20}}
      />

      {/* 
      
      gallery space
      
       */}

      <View
        style={{
          height: 450,
          paddingHorizontal: 15,
          backgroundColor: '#ffffff',
        }}>
        <CommonTopTab data={dataMap2} />
      </View>
      <CommonCarousel
        data={SummerCarouselData}
        width={width / 1.07}
        height={410}
        customStyle={{paddingVertical: 25}}
      />

      <Collections />
      <LifeStyleCard />
      <View style={{paddingLeft: 15, height: 500}}>
        <CommonTopTab data={dataMap3} />
      </View>
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40}}
      />
    </ScrollView>
  );
};

export default KidsCatagory;
