import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';
import {
  WoMenCatagoryTableData,
  WoMenCatagoryData,
  WoMenCatagoryData2,
  WoMenCatagoryBeachData,
  hasSpaces,
  HomePageSection,
  LandingPageL1Women,
} from '../../../../../constant';
import Card from '../../../../Common/Card';
import CategoryGrid from '../../../../Common/CategoryGrid';
import Chip from '../../../../Common/Chip';
import CollectionCard from '../../../../Common/CollectionCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
import OfferCard from '../../../../Common/OfferCard';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import SingleBanner from '../../../../Common/SingleBanner';
import StoriesCard from '../../../../Common/StoriesCard';
import SummerGalary from '../../../../Common/SummerGalary';
import TopSwiper from '../../../../Common/TopSwiper';
import WomenTab from '../../Tabs.js/WomenTab';
import {Styles} from './style';
const width = Dimensions.get('window').width;

const WomenCategory = props => {
  const [imgActive1, setImgActive1] = React.useState(0);
  const [active, setActive] = React.useState('');

  const [filteredComp, setFilteredComp] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fwomen&lang=en&curr=INR',
    );
    getSections(response?.contentSlots?.contentSlot);
  };

  const getSections = data => {
    var dataa = [];
    LandingPageL1Women.map(sectionId => {
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
      heading_btn: () => WomenCarouselText(),
      banner: image.WomenCarousel,
    },
    {
      heading_btn: () => WomenCarouselText(),
      banner: image.WomenCarousel,
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
              fontSize: 16,
              color: 'white',
              marginTop: 5,
            }}>
            Skincare that’s all natural
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

  const handleClick = data => {
    setActive(data);
  };

  const HomeScreen = item => {
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
    Apparel: HomeScreen,
    Jewellery: HomeScreen,
    Beauty: HomeScreen,
    Footwear: HomeScreen,
    Accessories: HomeScreen,
    Pants: HomeScreen,
  };
  const screenObj2 = {
    Saris: HomeScreen,
    Dresses: HomeScreen,
    Tunics: HomeScreen,
    Skirts: HomeScreen,
    Kurtas: HomeScreen,
    Pants: HomeScreen,
  };
  const screenObj3 = {
    Chanderi: HomeScreen,
    Chikankari: HomeScreen,
    Ikat: HomeScreen,
    Shibori: HomeScreen,
    Madhubani: HomeScreen,
  };
  const screenObj4 = {
    'Weekend Getaway': HomeScreen,
    'Lounging Around': HomeScreen,
    Brunch: HomeScreen,
  };
  const dataMap = WoMenCatagoryTableData.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  const dataMap1 = WoMenCatagoryData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  const dataMap3 = WoMenCatagoryData2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const dataMap4 = WoMenCatagoryBeachData.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
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
      banner: image.WomenCarousel,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
    },
    {
      offerValue: '70',
      banner: image.WomenCarousel,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
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
          paddingTop: 48,
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

  const getOfferTitleHeading = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay800,
            color: '#ffffff',
          }}>
          HANDCRAFTED
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: Fonts.PlayfairDisplay400Italic,
            color: '#ffffff',
            marginLeft: 5,
          }}>
          RINGS
        </Text>
      </View>
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

  const GetLifeStyleTitle = () => {
    return (
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600,
            color: '#4A4A4A',
            fontSize: 30,
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
            }}>
            Combos that’ll keep you feeling fab!
          </Text>
        </View>
      </View>
    );
  };
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
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay600,
          }}>
          {heading}
        </Text>
      </View>
    );
  };
  const checkSwitch = param => {
    switch (param?.typeCode) {
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} {...props} />;
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            {...props}
            customViewStyle={{marginVertical: 20}}
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
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        return (
          <>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: splitURL.split('?')[0],
                  title: param.title,
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
          </>
        );
      // section8 grid
      case 'FabBannerResponsiveTableComponent':
        return <CommonImageGrid {...props} data={param} />;
      // case 'FabBannerResponsiveTableComponent':
      //   return <CategoryGrid data={param} {...props} />;
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            {...props}
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
            <CollectionCard data={param} {...props} />
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
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   contentContainerStyle={{
    //     backgroundColor: Colors.backgroundColor,
    //     paddingBottom: 20,
    //     flexGrow: 1,
    //   }}>
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
    // </ScrollView>
  );
};
export default WomenCategory;
{
  /* <ScrollView
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  backgroundColor: Colors.backgroundColor,
  paddingBottom: 20,
}}> */
}
{
  /* =============Banner================= */
}
{
  /* <View style={Styles.imagecontainer}>
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
</View> */
}
{
  /* {Ids.includes('Section1') && (
  <TopSwiper data={dashboardData} position="Section1" />
)} */
}
{
  /* <TopSwiper
  data={[
    {banner: image.kidinterior1},
    {banner: image.banner1},
    {banner: image.kidinterior2},
  ]}
/> 
{/* ==============Women Listing========== */
}
{
  /* <NewHighlights
  title={getTitle('', 'Apparel')}
  data={WomenHighlightData}
  customStyle={{marginTop: 15}}
/>
<NewHighlights
  title={getTitle('', 'Jewellery')}
  data={WomenHighlightData}
  customStyle={{marginTop: 15}}
/>
<NewHighlights
  title={getTitle('', 'Beauty')}
  data={WomenHighlightData}
  customStyle={{marginTop: 15}}
/> */
}
{
  /* ==============Seller Chips=========== */
}
{
  /* <View style={Styles.chipbox}>
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
</View> */
}
{
  /* <View style={Styles.commontab}> */
}
{
  /* <CommonTopTab data={dataMap} /> */
}
{
  /* </View> */
}
{
  /* ================Summer Galery======== */
}
{
  /* <SummerGalary
  data={SummerGalaryData}
  title={getSummerTitle()}
  subtitles="Keep it cool this summer"
  backgroundColor="#EFE5E0"
/> */
}
{
  /* ==============Seller Chips=========== */
}
{
  /* <View style={Styles.chipbox}>
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
</View> */
}
{
  /* <View style={Styles.commontab}> */
}
{
  /* <CommonTopTab data={dataMap1} /> */
}
{
  /* </View> */
}
{
  /* ===============Offer carousole======== */
}
{
  /* <OfferCommonCarousel
  data={OfferData}
  width={width}
  height={430}
  customStyle={{marginVertical: 20}}
/> */
}

{
  /* 

gallery space

 */
}

{
  /* ==============Seller Chips=========== */
}
{
  /* <View style={Styles.chipbox}>
  <Chip
    title="Craft"
    handleClick={() => handleClick('Craft')}
    active={!!active ? active : 'Craft'}
  />
  <Chip
    title="Fabric"
    handleClick={() => handleClick('Fabric')}
    active={active}
  />
  <Chip
    title="Occassion"
    handleClick={() => handleClick('Occassion')}
    active={active}
  />
</View> */
}
{
  /* <View style={Styles.commontab}> */
}
{
  /* <CommonTopTab data={dataMap3} /> */
}
{
  /* </View> */
}
{
  /*=========== Beauty Essential ============*/
}
{
  /* <CommonCarousel data={WomenCarouselData} width={width} height={410} /> */
}
{
  /* ================Summer Galery======== */
}
{
  /* <SummerGalary
  data={SummerGalaryData}
  title={getSummerTitle2()}
  subtitles="Something for Summer"
  backgroundColor="#EFE5E0"
  customViewStyle={{marginTop: 20}}
/> */
}
{
  /* ==============Seller Chips=========== */
}
{
  /* <View style={Styles.chipbox}>
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
</View> */
}
{
  /* <View style={Styles.commontab}> */
}
{
  /* <CommonTopTab data={dataMap} /> */
}
{
  /* </View> */
}
{
  /*=========== Beauty Essential ============*/
}
{
  /* <CommonCarousel data={WomenCarouselData} width={width} height={410} /> */
}
{
  /* ================Collection ======== */
}
{
  /* <View style={{paddingVertical: 30}}>
  <Text style={Styles.CollectionHead}>Collections</Text>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingLeft: 15}}>
    {collectionData.map(item => (
      <CollectionCard key={Math.random() * 122992} item={item} />
    ))}
  </ScrollView>
</View> */
}
{
  /* ================LifeStyle 360======== */
}
{
  /* <LifeStyle
  data={LifeStyleData}
  title={GetLifeStyleTitle}
  backgroundColor="#F8F2EF"
/> */
}
{
  /* ================Beach day============ */
}
{
  /* <View style={Styles.commontab}> */
}
{
  /* <CommonTopTab data={dataMap4} /> */
}
{
  /* </View> */
}
{
  /* ================Story Card======== */
}
{
  /* <StoriesCard
  custumStyles={{marginTop: 15}}
  data={StoriesCardData}
  title={GetStoriesTitle}
/> */
}
// </ScrollView>
