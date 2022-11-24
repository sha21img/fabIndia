import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
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
  LandingPagePersonalCare,
} from '../../../../../constant';
import SimpleCard from '../../../../Common/SimpleCard';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import CommonCarousel from '../../../../Common/CommonCarousel';
import LifeStyleCard from './LifeStyleCard';
import StoriesCard from '../../../../Common/StoriesCard';
import PointDetailCard from '../../../../Common/PointDetailCard';
import Card from '../../../../Common/Card';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import WomenTab from '../../Tabs.js/WomenTab';
import NewHighlights from '../../../../Common/NewHighlights';
const width = Dimensions.get('window').width;

export default function BeautyCategory() {
  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);

  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'fabindiab2c/cms/pages?pageType=ContentPage&pageLabelOrId=%2Fpersonal-care&lang=en&curr=INR',
    );
    setSectionsData(response?.contentSlots?.contentSlot);

    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPagePersonalCare.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };
  React.useEffect(() => {
    getInitialData();
  }, []);

  const SummerGalaryData = [
    {image: image.BeautyProduct1, name: 'Skincare'},
    {image: image.BeautyProduct2, name: 'Haircare'},
    {image: image.BeautyProduct3, name: 'Fragrances'},
    {image: image.BeautyProduct4, name: 'Makeup'},
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
        Beauty, naturally!
      </Text>
    );
  };
  const HomeProductData = [
    {image: image.BeautyProduct5, name: 'Essential oils'},
    {image: image.BeautyProduct6, name: 'Bath & Body'},
    {image: image.BeautyProduct7, name: 'Skincare'},
    {image: image.BeautyProduct8, name: 'Hair care'},
  ];
  const getSummerTitle1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
          paddingTop: 48,
        }}>
        Summer specials
      </Text>
    );
  };
  const SimpleCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalCardCompoScrollIndicator={false}
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
            padding: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <PointDetailCard />
          <PointDetailCard />
        </ScrollView>
      </>
    );
  };
  const CardCompo = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
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
  const screenObj1 = {
    'Spices, Seasonings & Masalas': CardCompo,
    Tea: CardCompo,
    Preserves: CardCompo,
  };
  const dataMap1 = FoodCatagoryTab1.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  // Tab 2
  const screenObj2 = {
    'Tulsi Tea': CardCompo,
    'Herbal Infusions': CardCompo,
    'Green Tea': CardCompo,
    'Flavoured Tea': CardCompo,
  };
  const dataMap2 = FoodCatagoryTab2.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  // Tab 3
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
          }}>
          beauty
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant300,
            color: '#ffffff',
            fontSize: 50,
          }}>
          101
        </Text>
      </View>
    );
  };
  const checkSwitch = param => {
    switch (param?.typeCode) {
      //1
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} />;
      //  2,3,4
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      //5 not present

      //6
      // case 'FabCMSTabContainer':
      //   return <WomenTab data={param} />;

      //7
      case 'SimpleResponsiveBannerComponent':
        return (
          <Image
            resizeMode="stretch"
            source={{
              uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
            }}
            style={{height: 300, width: width}}
          />
        );

      //8,9,10 empty
      //11 not present
      //12 empty
      default:
        return;
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
        flexGrow: 1,
      }}>
      {filteredComp.map(item => {
        return checkSwitch(item);
      })}
    </ScrollView>
  );
}

// {Ids.includes('Section1') && (
//   <TopSwiper data={dashboardData} position="Section1" />
// )}

// <SummerGalary
//   data={SummerGalaryData}
//   title={getSummerTitle()}
//   subtitles="Using nature’s best for your skin"
//   backgroundColor="#EFE5E0"
//   customViewStyle={{marginBottom: 50}}
// />
// <View
//   style={{
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 15,
//     marginTop: 5,
//   }}>
//   <Chip
//     title="Bestsellers"
//     handleClick={() => handleClick('Bestsellers')}
//     active={active}
//   />
//   <Chip
//     title="Recommended for you"
//     handleClick={() => handleClick('Recommended for you')}
//     active={active}
//   />
// </View>
// <CommonTopTab data={dataMap1} />
// <OfferCommonCarousel
//   data={OfferData}
//   UptoText="UPTO"
//   backgroundColor={'#DB8C5F'}
//   width={width / 1.07}
//   height={420}
//   customStyle={{marginVertical: 20}}
// />
// <SummerGalary
//   data={HomeProductData}
//   title={getSummerTitle1()}
//   subtitles="Rejuvenate every morning!"
//   backgroundColor="#EFE5E0"
//   customViewStyle={{marginBottom: 50, marginTop: 20}}
// />
// <View
//   style={{
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 15,
//     marginTop: 5,
//   }}>
//   <Chip
//     title="Bestsellers"
//     handleClick={() => handleClick('Bestsellers')}
//     active={active}
//   />
//   <Chip
//     title="Recommended for you"
//     handleClick={() => handleClick('Recommended for you')}
//     active={active}
//   />
// </View>
// <CommonTopTab data={dataMap2} />
// <CommonCarousel data={WomenCarouselData} width={width} height={410} />
// <SummerGalary
//   data={HomeProductData}
//   title={getSummerTitle1()}
//   subtitles="Bask in the sun with the best in beauty"
//   backgroundColor="#EFE5E0"
//   customViewStyle={{marginBottom: 50, marginTop: 20}}
// />
// <LifeStyleCard />
// <CommonTopTab data={dataMap3} />
// <StoriesCard
//   data={StoriesCardData}
//   title={GetStoriesTitle}
//   custumStyles={{marginTop: 40, backgroundColor: '#C2AB96'}}
// />
