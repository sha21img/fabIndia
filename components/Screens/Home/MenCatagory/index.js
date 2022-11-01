import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import {Styles} from './styles';
import NewHighlights from '../../../Common/NewHighlights';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import {
  MenCatagoryData,
  MenCatagoryTab2,
  MenCatagoryTab3,
  MenCatagoryTableData,
  WomenTabdata,
} from '../../../../constant';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import SummerGalary from '../../../Common/SummerGalary';
import OfferCard from '../../../Common/OfferCard';
import CommonCarousel from '../../../Common/CommonCarousel';
import Collections from './Collections';
import LifeStyleCard from './LifeStyleCard';
import TopGallery from './TopGallery';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';

const getOfferTitleHeading = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: Fonts.PlayfairDisplay800,
          color: '#ffffff',
        }}>
        SUMMER
      </Text>
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.PlayfairDisplay400Italic,
          color: '#ffffff',
          marginLeft: 5,
        }}>
        PRINTS
      </Text>
    </View>
  );
};

const OfferData = [
  {
    offerValue: '70',
    heading: () => getOfferTitleHeading(),
    description:
      'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
  },
  {
    offerValue: '70',
    heading: () => getOfferTitleHeading(),
    description:
      'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
  },
];

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard1, title: 'Tunics'},
  {image: image.womenCard1, title: 'Tops'},
];
const MenCatagory = () => {
  const [active, setActive] = React.useState('Bestsellers');
  const [imgActive1, setImgActive1] = React.useState(0);

  const handleClick = data => {
    setActive(data);
  };
  const HomeScreen = item => {
    return (
      <ScrollView
        horizontal
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
  const HomeScreen1 = item => {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <PointDetailCard />
        <PointDetailCard />
        {/* <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        />
        <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        /> */}
      </ScrollView>
    );
  };
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
            fontFamily: Fonts.LaBelleAurore400,
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
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];

  const screenObj1 = {
    'Ethnic Wear': HomeScreen,
    'Western Wear': HomeScreen,
    Accessories: HomeScreen,
    Footwear: HomeScreen,
    Pants: HomeScreen,
  };
  const screenObj2 = {
    Kurtas: HomeScreen,
    Shirts: HomeScreen,
    'Nehru Jackets & Blazers': HomeScreen,
    Pyjamas: HomeScreen,
  };
  const dataMap = MenCatagoryTableData.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  const dataMap1 = MenCatagoryData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  const screenObj3 = {
    Cotton: HomeScreen,
    Linen: HomeScreen,
    Silk: HomeScreen,
    'Cotton Silk': HomeScreen,
    'Cotton Linen': HomeScreen,
  };
  const screenObj4 = {
    'Lounging Around': HomeScreen1,
    'Work from Home': HomeScreen1,
    'In the Kitchen': HomeScreen1,
  };
  const dataMap2 = MenCatagoryTab2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const dataMap3 = MenCatagoryTab3.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));

  const SummerGalaryData = [
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Dresses'},
    {image: image.womenPhoto3, name: 'Tunics'},
    {image: image.womenPhoto4, name: 'Saris'},
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
  ];
  const getTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Apparel
      </Text>
    );
  };
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
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}>
      <TopGallery />

      <NewHighlights title="Ethnic Wear" data={WomenHighlightData} />
      <NewHighlights title="Western Wear" data={WomenHighlightData} />
      <NewHighlights title="Accessories" data={WomenHighlightData} />
      <View style={Styles.chipbox}>
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
      <View style={Styles.commontab}>
        <CommonTopTab data={dataMap} />
      </View>

      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="For those sultry summer days"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 40}}
      />
      <View style={Styles.chipbox}>
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
      <View style={Styles.commontab}>
        <CommonTopTab data={dataMap1} />
      </View>
      <View style={{marginVertical: 40}}>
        <ImageBackground
          source={image.customkurtas}
          style={Styles.backgroundimage}>
          <View style={Styles.customkurtabox}>
            <Text style={Styles.customtxt}>CUSTOM</Text>
            <Text style={Styles.kurtatxt}>KURTAS</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 70,
              backgroundColor: 'rgba(45, 53, 71, 0.8)',
              paddingHorizontal: 30,
              paddingVertical: 10,
              width: '100%',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontFamily: Fonts.Assistant400,
                lineHeight: 21,
              }}>
              Select your own material, length, collar, sleeves, pockets and
              cuffs.
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: Fonts.Assistant400,
                fontSize: 16,
                lineHeight: 21,
              }}>
              Kurtas... any way you like them!
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginHorizontal: 20,
              borderRadius: 40,
              alignSelf: 'flex-start',
            }}>
            <Text
              style={{
                color: Colors.primarycolor,
                fontSize: 16,
                lineHeight: 21,
                fontFamily: Fonts.Assistant400,
              }}>
              Customize your own
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={Styles.chipbox}>
        <Chip
          title="Fabric"
          handleClick={() => handleClick('Fabric')}
          active={active}
        />
        <Chip
          title="Style"
          handleClick={() => handleClick('Style')}
          active={active}
        />
        <Chip
          title="Ocassion"
          handleClick={() => handleClick('Ocassion')}
          active={active}
        />
      </View>
      <View style={Styles.commontab}>
        <CommonTopTab data={dataMap2} />
      </View>

      <View>
        <ScrollView
          horizontal
          onScroll={({nativeEvent}) => onchangeCarousole(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {OfferData.map(item => (
            <OfferCard
              key={Math.random() * 9999}
              data={item}
              backgroundColor="#93BAC7"
            />
          ))}
        </ScrollView>
        <View
          style={{
            // position: 'absolute',
            // bottom: 0,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          {OfferData.map((item, index) => (
            <Text
              key={Math.random() * 9999}
              style={
                imgActive1 == index
                  ? {
                      margin: 3,
                      color: Colors.primarycolor,
                      fontSize: 16,
                    }
                  : {
                      margin: 3,
                      color: '#ABABAB',
                      fontSize: 16,
                    }
              }>
              ●
            </Text>
          ))}
        </View>
      </View>
      <Collections />
      <LifeStyleCard />
      <View style={Styles.commontab}>
        <CommonTopTab data={dataMap3} />
      </View>
      <StoriesCard data={StoriesCardData} title={GetStoriesTitle} />
    </ScrollView>
  );
};

export default MenCatagory;
