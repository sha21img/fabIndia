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
  MenCatagoryTableData,
  WomenTabdata,
} from '../../../../constant';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import SummerGalary from '../../../Common/SummerGalary';
import OfferCard from '../../../Common/OfferCard';
import CommonCarousel from '../../../Common/CommonCarousel';

const getOfferTitleHeading = () => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontFamily: Fonts.PlayfairDisplay800,
        color: '#ffffff',
      }}>
      SUMMER
    </Text>
  );
};
const getOfferSubHeading = () => {
  return (
    <Text
      style={{
        fontSize: 26,
        fontFamily: Fonts.PlayfairDisplay400Italic,
        color: '#ffffff',
        marginLeft: 5,
      }}>
      PRINTS
    </Text>
  );
};
const OfferData = [
  {
    offerValue: '70',
    heading: () => getOfferTitleHeading(),
    subHeading: () => getOfferSubHeading(),
    description:
      'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
  },
  {
    offerValue: '70',
    heading: () => getOfferTitleHeading(),
    subHeading: () => getOfferSubHeading(),
    description:
      'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
  },
];
const imageData = [
  {
    image: image.rise,
    title: 'Rise & shine!',
  },
  {
    image: image.fitness,
    title: 'Fitness routine',
  },
  {
    image: image.meal,
    title: 'Meal prep',
  },
  {
    image: image.lounging,
    title: 'Lounging',
  },
  {
    image: image.out,
    title: 'Out and about',
  },
  {
    image: image.bedtime,
    title: 'Bedtime stories',
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
      <>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingVertical: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <Card customViewStyle={{marginRight: 10}} />
          <Card customViewStyle={{marginRight: 10}} />
        </ScrollView>
      </>
    );
  };

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
  const dataMap2 = MenCatagoryTab2.map(item => ({
    name: item,
    screen: screenObj3[item],
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
      contentContainerStyle={{backgroundColor: Colors.backgroundColor}}>
      <View style={Styles.imagecontainer}>
        {imageData.map((item, i) => {
          return (
            <ImageBackground
              key={Math.random() * 6776}
              resizeMode="cover"
              style={Styles.backgroundimg}
              source={item.image}>
              <View
                style={[
                  Styles.txtbox,
                  {top: i < 3 ? 15 : null, bottom: i >= 3 ? 15 : null},
                ]}>
                <Text style={Styles.imagetxt}>{item.title}</Text>
              </View>
            </ImageBackground>
          );
        })}
        <View
          style={{
            width: 160,
            height: 160,
            backgroundColor: 'rgba(144, 50, 51, 0.8)',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            borderRadius: 100,
            top: 142,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant300,
              color: '#FFFFFF',
              lineHeight: 18,
              textAlign: 'center',
            }}>
            A day in the life of a
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 6,
              alignItems: 'flex-end',
            }}>
            <Image
              source={image.whitelogo}
              style={{height: 20, width: 67}}
              resizeMode="contain"
            />
            <Text
              style={{
                color: '#FFFFFF',
                marginLeft: 3,
                fontSize: 18,
                fontFamily: Fonts.PlayfairDisplay400,
              }}>
              man
            </Text>
          </View>
        </View>
      </View>
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
      {/* <CommonCarousel data={WomenCarouselData} /> */}

      <View style={{height: 500}}>
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
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          {OfferData.map((item, index) => (
            <Text
              key={Math.random() * 988999}
              style={
                imgActive1 == index
                  ? {
                      margin: 3,
                      color: 'red',
                    }
                  : {
                      margin: 3,
                      color: '#ABABAB',
                    }
              }>
              ●
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MenCatagory;
