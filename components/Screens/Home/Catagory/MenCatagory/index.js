import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {image} from '../../../../../assets/images';
import {Styles} from './styles';
import NewHighlights from '../../../../Common/NewHighlights';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {
  hasSpaces,
  LandingPageL1Men,
  MenCatagoryData,
  MenCatagoryTab2,
  MenCatagoryTab3,
  MenCatagoryTableData,
  WomenTabdata,
} from '../../../../../constant';
import Card from '../../../../Common/Card';
import {Colors} from '../../../../../assets/Colors';
import SummerGalary from '../../../../Common/SummerGalary';
import OfferCard from '../../../../Common/OfferCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Collections from './Collections';
import LifeStyleCard from './LifeStyleCard';
import TopGallery from './TopGallery';
import PointDetailCard from '../../../../Common/PointDetailCard';
import StoriesCard from '../../../../Common/StoriesCard';
import Fonts from '../../../../../assets/fonts';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
const width = Dimensions.get('window').width;
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
const getDescription = () => {
  return (
    <Text
      style={{
        fontSize: 16,
        fontFamily: Fonts.Assistant400,
        color: '#ffffff',
      }}>
      Be summer-ready with our collection of muted solids, pastel prints and
      relaxed silhouettes!
    </Text>
  );
};

const OfferData = [
  {
    offerValue: '70',
    banner: image.manCarousel,
    heading: () => getOfferTitleHeading(),
    description: () => getDescription(),
  },
  {
    offerValue: '70',
    banner: image.manCarousel,
    heading: () => getOfferTitleHeading(),
    description: () => getDescription(),
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
  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'fabindiab2c/cms/pages?pageType=ContentPage&pageLabelOrId=%2Fmen&lang=en&curr=INR',
    );
    console.log('Men Catagory response', response);
    setSectionsData(response?.contentSlots?.contentSlot);
    // getIds(response.contentSlots.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Men.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };
  // const getIds = data => {
  //   let datas = [];
  //   const newArray = data.map(item => {
  //     datas.push(item.position);
  //     return datas;
  //   });
  //   setIds(datas);
  // };

  React.useEffect(() => {
    getInitialData();
  }, []);

  const handleClick = data => {
    setActive(data);
  };

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
  const HomeScreen1 = item => {
    return (
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
    );
  };
  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
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
          paddingTop: 48,
        }}>
        Apparel
      </Text>
    );
  };
  const getTit = (title, heading) => {
    return (
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces(heading) ? {width: width / 3.4} : {width: null},
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
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay600,
          }}>
          {heading}
        </Text>
      </View>
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
  const checkSwitch = param => {
    switch (param?.typeCode) {
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} />;
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
          />
        );
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        return (
          <View style={{marginTop: 20}}>
            <Image
              resizeMode="stretch"
              source={{
                uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
              }}
              style={{height: 300, width: width}}
            />
          </View>
        );
      // section8 grid
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            data={param}
            width={width / 1.07}
            height={200}
            customStyle={{marginVertical: 20}}
          />
        );
      case 'FabBannerL1ResponsiveCarouselComponent':
        return (
          <>
            <Text
              style={{
                marginLeft: 15,
                fontFamily: Fonts.PlayfairDisplay600Italic,
                fontSize: 20,
                color: Colors.textcolor,
                marginBottom: 10,
              }}>
              Collections
            </Text>
            <CollectionCard data={param} />
          </>
        );
      // CollectionCard
      // case 'CMSFlexComponent':
      //   return;
      default:
        return;
    }
  };

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
        flexGrow: 1,
      }}
      data={filteredComp}
      keyExtractor={(item, index) => index}
      renderItem={item => checkSwitch(item.item)}
    />
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   contentContainerStyle={{
    //     backgroundColor: Colors.backgroundColor,
    //     paddingBottom: 20,
    //     flexGrow: 1,
    //   }}>
    //   {filteredComp.map(item => {
    //     return checkSwitch(item);
    //   })}
    // </ScrollView>
  );
};

export default MenCatagory;

{
  /* <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
  }}>
  {Ids.includes('Section1') && (
    <TopSwiper data={dashboardData} position="Section1" />
  )}
  <NewHighlights
    title={getTit('', 'Ethnic Wear')}
    data={WomenHighlightData}
    customStyle={{marginTop: 15}}
  />
  <NewHighlights
    title={getTit('', 'Western Wear')}
    data={WomenHighlightData}
    customStyle={{marginTop: 15}}
  />
  <NewHighlights
    title={getTit('', 'Accessories')}
    data={WomenHighlightData}
    customStyle={{marginTop: 15}}
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
  <CommonTopTab data={dataMap} />

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
  <CommonTopTab data={dataMap1} />
  <View style={{marginVertical: 40}}>
    <ImageBackground source={image.customkurtas} style={Styles.backgroundimage}>
      <View style={Styles.customkurtabox}>
        <Text style={Styles.customtxt}>CUSTOM</Text>
        <Text style={Styles.kurtatxt}>KURTAS</Text>
      </View>
      <View style={Styles.descriptionbox}>
        <Text style={Styles.descriptiontxt}>
          Select your own material, length, collar, sleeves, pockets and cuffs.
        </Text>
        <Text style={Styles.descriptiontxt}>
          Kurtas... any way you like them!
        </Text>
      </View>
      <TouchableOpacity style={Styles.btnbox}>
        <Text style={Styles.btntxt}>Customize your own</Text>
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
  <CommonTopTab data={dataMap2} />
  <OfferCommonCarousel
    data={OfferData}
    backgroundColor={'#93BAC7'}
    width={width / 1.07}
    height={430}
    customStyle={{marginBottom: 10, marginTop: 20}}
  />
  <Collections customStyle={{marginVertical: 15}} />
  <LifeStyleCard />
  <CommonTopTab data={dataMap3} />

  <StoriesCard
    data={StoriesCardData}
    title={GetStoriesTitle}
    custumStyles={{marginTop: 40}}
  />
</ScrollView>; */
}
