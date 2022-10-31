import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';
import {MenCatagoryTableData, MenCatagoryData} from '../../../../constant';
import Card from '../../../Common/Card';
import Chip from '../../../Common/Chip';
import CollectionCard from '../../../Common/CollectionCard';
import CommonCarousel from '../../../Common/CommonCarousel';
import CommonTopTab from '../../../Common/CommonTopTab';
import LifeStyle from '../../../Common/LifeStyle';
import NewHighlights from '../../../Common/NewHighlights';
import OfferCard from '../../../Common/OfferCard';
import StoriesCard from '../../../Common/StoriesCard';
import SummerGalary from '../../../Common/SummerGalary';
import {Styles} from './style';

const WomenCategory = () => {
  const [imgActive1, setImgActive1] = React.useState(0);
  const [active, setActive] = React.useState('Bestsellers');
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
  const SummerGalaryData = [
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Dresses'},
    {image: image.womenPhoto3, name: 'Tunics'},
    {image: image.womenPhoto4, name: 'Saris'},
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
  ];

  const LifeStyleData = [
    {image: image.womenPhoto1, name: 'Work from Home'},
    {image: image.womenPhoto2, name: 'Summer afternoons'},
    {image: image.womenPhoto3, name: 'Summer afternoons'},
    {image: image.womenPhoto4, name: 'Work from Home'},
  ];

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

  const WomenCarouselData = [
    {
      heading: () => WomenCarouselText(),
      banner: image.WomenCarousel,
      buttonText: 'Explore collection',
    },
    {
      heading: () => WomenCarouselText(),
      banner: image.WomenCarousel,
      buttonText: 'Explore collection',
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
            Beauty Essentials
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontWeight: '400',
              fontSize: 16,
              color: 'white',
              marginTop: 5,
            }}>
            Skincare that’s all natural
          </Text>
        </View>
      </>
    );
  };

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
          <Card
            customViewStyle={{marginRight: 10}}
            offer="20"
            originalprice="1000"
          />
          <Card
            customViewStyle={{marginRight: 10}}
            offer="20"
            originalprice="1000"
          />
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

  const collectionData = [
    {
      image: image.collectionPic,
      heading: 'Summer Collection',
      text: 'Be summer-ready with prints and easy, breezy silhouettes',
      color: '#AFA07A',
    },
    {
      image: image.collectionPic2,
      heading: 'Summer Collection',
      text: 'Be summer-ready with prints and easy, breezy silhouettes',
      color: '#464A62',
    },
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
        Summer prints
      </Text>
    );
  };

  const getSummerTitle2 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Fussion Wear
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
        RINGS
      </Text>
    );
  };

  const getOfferTitleHeading = () => {
    return (
      <Text
        style={{
          fontSize: 24,
          fontFamily: Fonts.PlayfairDisplay800,
          color: '#ffffff',
        }}>
        HANDCRAFTED
      </Text>
    );
  };

  const GetStoriesTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.BarlowRegular,
          color: '#ffffff',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontFamily: Fonts.LaBelleAuroreRegular,
            color: '#ffffff',
            fontSize: 60,
            lineHeight: 90,
          }}>
          Style
        </Text>{' '}
        STORIES
      </Text>
    );
  };

  const GetLifeStyleTitle = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600,
            color: '#4A4A4A',
            fontSize: 30,
            marginHorizontal: 20,
            marginBottom: 5,
          }}>
          Lifestyle 360
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#4A4A4A',
              lineHeight: 23,
              fontFamily: Fonts.Assistant400,
              marginHorizontal: 20,
            }}>
            Combos that’ll keep you feeling fab!
          </Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: Colors.backgroundColor}}>
      {/* =============Banner================= */}
      <View style={Styles.imagecontainer}>
        {imageData.map((item, i) => {
          return (
            <ImageBackground
              key={Math.random() * 777266}
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
              women
            </Text>
          </View>
        </View>
      </View>
      {/* ==============Women Listing========== */}
      <NewHighlights title="Apparel" data={WomenHighlightData} />
      <NewHighlights title="Jewellery" data={WomenHighlightData} />
      <NewHighlights title="Beauty" data={WomenHighlightData} />
      {/* ==============Seller Chips=========== */}
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
      {/* ================Summer Galery======== */}
      <SummerGalary
        data={SummerGalaryData}
        title={getSummerTitle()}
        subtitles="Keep it cool this summer"
        backgroundColor="#EFE5E0"
      />
      {/* ==============Seller Chips=========== */}
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
      {/* ===============Offer carousole======== */}
      <View style={{height: 500}}>
        <ScrollView
          horizontal
          onScroll={({nativeEvent}) => onchangeCarousole(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {OfferData.map(item => (
            <OfferCard key={Math.random() * 9999} data={item} />
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
      {/* ==============Seller Chips=========== */}
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
      {/*=========== Beauty Essential ============*/}
      <CommonCarousel data={WomenCarouselData} />
      {/* ================Summer Galery======== */}
      <SummerGalary
        data={SummerGalaryData}
        title={getSummerTitle2()}
        subtitles="Something for Summer"
        backgroundColor="#EFE5E0"
      />
      {/* ==============Seller Chips=========== */}
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
      {/*=========== Beauty Essential ============*/}
      <CommonCarousel data={WomenCarouselData} />
      {/* ================Collection ======== */}
      <View style={{paddingVertical: 30}}>
        <Text style={Styles.CollectionHead}>Collections</Text>
        <ScrollView horizontal>
          {collectionData.map(item => (
            <CollectionCard item={item} />
          ))}
        </ScrollView>
      </View>
      {/* ================LifeStyle 360======== */}
      <LifeStyle data={LifeStyleData} title={GetLifeStyleTitle} />
      {/* ================Story Card======== */}
      <StoriesCard data={StoriesCardData} title={GetStoriesTitle} />
    </ScrollView>
  );
};
export default WomenCategory;
