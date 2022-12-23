import React from 'react';
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';
import {
  HomeCatagoryTab4,
  KidsTableData2,
  MenCatagoryData,
} from '../../../../constant';
import ArCarousel from '../../../Common/ArCarousel';
import Card from '../../../Common/Card';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import LifeStyleCard from '../../../Common/LifeStyleCard';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';
import HomeCard from './HomeCard';
import KidsCard from './KidsCard';
import MenCard from './MenCard';
const width = Dimensions.get('window').width;
const data = [
  {
    name: 'Tables',
    banner: image.womenPhoto1,
    bannerColor: '#99162A',
  },
  {
    name: 'Wall Mirror',
    banner: image.womenPhoto2,
    bannerColor: '#C1985F',
  },
  {
    name: 'Beds',
    banner: image.womenPhoto3,
    bannerColor: '#D36B4A',
  },
  {
    name: 'Cabinets',
    banner: image.womenPhoto4,
    bannerColor: '#8091BB',
  },
  {
    name: 'Cabinets',
    banner: image.womenPhoto4,
    bannerColor: '#99162A',
  },
  {
    name: 'Cabinets',
    banner: image.womenPhoto4,
    bannerColor: '#8091BB',
  },
];
const HomeScreen = item => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 10,
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
const Dussehra = () => {
  const [active, setActive] = React.useState();

  const handleClick = data => {
    setActive(data);
  };
  const screenObj2 = {
    Kurtas: HomeScreen,
    Shirts: HomeScreen,
    'Nehru Jackets & Blazers': HomeScreen,
    Pyjamas: HomeScreen,
  };
  const dataMap1 = MenCatagoryData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  const data1 = [
    {
      banner: image.WomenCarousel,
    },
    {
      banner: image.WomenCarousel,
    },
  ];
  const HomeScreen2 = item => {
    return <ArCarousel data={data1} width={width / 1.07} height={380} />;
  };
  const screenObj3 = {
    Bestsellers: HomeScreen2,
    Furniture: HomeScreen2,
    'Games & Toys': HomeScreen2,
  };
  const PointDetailCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 15,
            backgroundColor: Colors.backgroundColor,
          }}>
          <PointDetailCard />
          <PointDetailCard />
        </ScrollView>
      </>
    );
  };
  const dataMap2 = KidsTableData2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const screenObj4 = {
    'Meals at Home': PointDetailCardList,
    'Room Makeover': PointDetailCardList,
    Staycation: PointDetailCardList,
  };
  const dataMap4 = HomeCatagoryTab4.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20,
          paddingLeft: 15,
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
  const StoriesCardData = [
    {
      Image: image.homeStoryCardPic,
      description: 'Tanya mixes and matches bed linen to create a cozy rooms',
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 30,
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
      }}>
      <ImageBackground
        source={image.dushera}
        style={{
          width: width,
          height: 354,
          marginTop: 10,
          backgroundColor: Colors.primarycolor,
        }}></ImageBackground>
      <LinearGradient
        colors={[
          'rgba(202, 154, 81, 0.9)',
          'rgba(227, 168, 78, 1)',
          'rgba(202, 154, 81, 0.9)',
        ]}
        style={{paddingHorizontal: 10, paddingVertical: 15}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 29,
            lineHeight: 30,
            color: '#FFFFFF',
          }}>
          HAPPY DUSSEHRA!
        </Text>
        <Text
          style={{
            marginTop: 15,
            lineHeight: 21,
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: Fonts.Assistant300,
          }}>
          Dussehra is an auspicious time to make those big purchases we’ve been
          mulling over all through the year. We bring you rich, gorgeous silks,
          handcrafted furniture and home decor in celebration of the new year!
        </Text>
      </LinearGradient>
      <View
        style={{
          paddingVertical: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '30%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700Italic,
              fontSize: 24,
              lineHeight: 32,
              color: Colors.primarycolor,
            }}>
            WOMEN
          </Text>
        </View>
        <View style={{width: '65%'}}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 14,
              lineHeight: 18,
              color: Colors.textcolor,
            }}>
            It’s the time to celebrate the triumph of good over evil. To ring in
            the new. Start afresh with our collection of traditional apparel and
            jewellery.
          </Text>
        </View>
      </View>
      <ScrollView horizontal contentContainerStyle={{margin: 0, padding: 0}}>
        {data.map((item, index) => {
          return (
            <ImageBackground
              source={image.vv}
              style={{
                height: index % 2 ? 263 : 233,
                width: 190,
                marginLeft: 15,
                marginTop: index % 2 ? 15 : 30,
                overflow: 'hidden',
              }}>
              <View
                style={[
                  {
                    position: 'absolute',
                    bottom: -14,
                    left: -14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    backgroundColor: '#99162A',
                    height: 104,
                    width: 104,
                    opacity: 0.8,
                  },
                  {backgroundColor: item.bannerColor},
                ]}>
                <Text
                  style={{
                    marginLeft: 5,
                    marginVertical: 5,
                    fontSize: 14,
                    fontFamily: Fonts.PlayfairDisplay600Italic,
                    lineHeight: 21,
                    color: '#ffffff',
                  }}>
                  {item.name}
                </Text>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>
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
      <CommonTopTab data={dataMap1} />
      <MenCard />
      <CommonTopTab data={dataMap1} />

      <HomeCard />
      <CommonTopTab data={dataMap2} />

      <KidsCard />
      <CommonTopTab data={dataMap1} />
      <LifeStyleCard />
      <CommonTopTab data={dataMap4} />
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40, backgroundColor: '#908EA6'}}
      />
    </ScrollView>
  );
};
export default Dussehra;
