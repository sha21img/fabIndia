import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';
import {Furniture2, KidsTableData2} from '../../../../../constant';
import ArCarousel from '../../../../Common/ArCarousel';
import Card from '../../../../Common/Card';
import Chip from '../../../../Common/Chip';
import CommonCarousel from '../../../../Common/CommonCarousel';
import CommonTopTab from '../../../../Common/CommonTopTab';
import CornerGallery from '../../../../Common/CornerGallery';
import InteriorCatagory from '../../../../Common/InteriorCatagory';
import LifeStyleCard from '../HomeCatagory/LifeStyleCard';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import PointDetailCard from '../../../../Common/PointDetailCard';
import StoriesCard from '../../../../Common/StoriesCard';
import TopSwiper from '../../../../Common/TopSwiper';
import Customize from './Customize';
import {Styles} from './style';
import TopGallary from './TopGallary';
import JewelleryRange from '../../../../Common/JewelleryRange';
import {getData} from '../../../../Common/Helper';
import {LandingPageFurniture} from '../../../../../constant';
import NewHighlights from '../../../../Common/NewHighlights';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

const FurnitureCategory = props => {
  const {title} = props.route.params;

  const [active, setActive] = React.useState();
  const [active1, setActive1] = React.useState();
  const [sectionData, setSectionData] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Ffurniture&lang=en&curr=INR',
    );
    setSectionData(response?.contentSlots?.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageFurniture.map(sectionId => {
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
  const checkSwitch = param => {
    switch (param?.typeCode) {
      //1
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} {...props} />;
      //2,3,4
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginTop: 30}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      //5
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            {...props}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
            customViewStyle={{marginVertical: 30}}
          />
        );
      //6
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      //7,8,9 empty
      // case 'SimpleResponsiveBannerComponent':
      //   return (
      //     <Image
      //       resizeMode="stretch"
      //       source={{
      //         uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
      //       }}
      //       style={{height: 300, width: width}}
      //     />
      //   );
      //10
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;
      //11,12 empty

      //  13

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            data={param}
            width={width / 1.07}
            height={200}
            {...props}
          />
        );
      // 14
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
  const CornerGalleryHeader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          color: '#ffffff',
        }}>
        A piece for every corner
      </Text>
    );
  };
  const CornerGalleryHeader1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          color: '#ffffff',
        }}>
        Rattan
      </Text>
    );
  };
  const CornerGallerySubheader = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 26,
          color: '#ffffff',
        }}>
        Furniture that’s art
      </Text>
    );
  };
  const CornerGallerySubheader1 = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 26,
          color: '#ffffff',
        }}>
        A story in every weave
      </Text>
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
    return (
      <ArCarousel
        key={Math.random() * 22983}
        data={data}
        width={width / 1.07}
        height={380}
      />
    );
  };

  const HomeScreen = item => {
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          padding: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <PointDetailCard />
        <PointDetailCard />
      </ScrollView>
    );
  };

  const screenObj3 = {
    'Living Room': HomeScreen2,
    Dining: HomeScreen2,
    Bedroom: HomeScreen2,
    'Study Room': HomeScreen2,
  };
  const screenObj2 = {
    'Living Room': HomeScreen,
    Dining: HomeScreen,
    Bedroom: HomeScreen,
    'Study Room': HomeScreen,
  };

  const dataMap = Furniture2.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));

  const SummerCarousel = () => {
    return (
      <>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            lineHeight: 35,
            fontFamily: Fonts.IndieFlower,
          }}>
          Make everyday Special
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 18,
            lineHeight: 21,
            color: 'white',
            paddingVertical: 5,
            paddingRight: 10,
          }}>
          Make the room of their dreams!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            padding: 10,
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

  const dataMap2 = Furniture2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));

  const handleClick = data => {
    setActive(data);
  };
  const handleClick1 = data => {
    setActive1(data);
  };

  const CornerGalleryData = [
    {
      image: image.furniture3,
      name: 'Living',
    },
    {
      image: image.furniture4,
      name: 'Dining',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture3,
      name: 'Living',
    },
    {
      image: image.furniture4,
      name: 'Dining',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
  ];

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

  const JewelleryRangeData = [
    {
      image: image.furniture3,
      name: 'Bangles & Bracelets',
    },
    {
      image: image.furniture4,
      name: 'Anklets',
    },
    {
      image: image.furniture2,
      name: 'Rings',
    },
    {
      image: image.furniture3,
      name: 'Nose and Pins',
    },
    {
      image: image.furniture4,
      name: 'Dining',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
    {
      image: image.furniture2,
      name: 'Bedroom',
    },
  ];

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

  const StoriesCardData = [
    {
      Image: image.homeStoryCardPic,
      description: 'Tanya mixes and matches bed linen to create a cozy rooms',
    },
  ];

  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
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

  const StoriesTitle = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: Fonts.RunWildDemo,
            fontSize: 60,
            lineHeight: 60,
          }}>
          Style
        </Text>
        <Text
          style={{fontFamily: Fonts.Barlow400, fontSize: 30, lineHeight: 16}}>
          STORIES
        </Text>
      </View>
    );
  };
  return (
    <>
      <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
      />

      <ScrollView
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}>
        {filteredComp.map(item => {
          return checkSwitch(item);
        })}
      </ScrollView>
    </>
  );
};

export default FurnitureCategory;
// {Ids.includes('Section1') && (
//   <TopSwiper data={dashboardData} position="Section1" />
// )}

// <CornerGallery
//   header={CornerGalleryHeader}
//   subHeader={CornerGallerySubheader}
//   data={CornerGalleryData}
// />
// <View
//   style={{
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 15,
//     marginTop: 15,
//   }}>
//   <Chip
//     title="Bestsellers"
//     handleClick={() => handleClick('Bestsellers')}
//     active={!!active ? active : 'Bestsellers'}
//   />
//   <Chip
//     title="Recommended for you"
//     handleClick={() => handleClick('Recommended for you')}
//     active={active}
//   />
// </View>
// <View
//   style={{
//     backgroundColor: '#ffffff',
//     marginBottom: 10,
//   }}>
//   <CommonTopTab data={dataMap2} />
// </View>
// <View style={{marginVertical: 30}}>
//   <InteriorCatagory buttonText={'Get in touch with us'} />
// </View>
// <Customize
//   Description={
//     'Bring home your very own customized Fabindia furniture! From wood finish to upholstery, make every piece your own!'
//   }
//   heading={'CUSTOMIZE YOUR FURNITURE'}
// />
// <OfferCommonCarousel
//   data={OfferData}
//   UptoText="UPTO"
//   backgroundColor={'#DB8C5F'}
//   width={width / 1.07}
//   height={420}
//   customStyle={{marginVertical: 20}}
// />
// <CornerGallery
//   header={CornerGalleryHeader1}
//   subHeader={CornerGallerySubheader1}
//   data={CornerGalleryData}
// />
// <View
//   style={{
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 15,
//     marginTop: 15,
//   }}>
//   <Chip
//     title="Bestsellers"
//     handleClick={() => handleClick('Bestsellers')}
//     active={!!active ? active : 'Bestsellers'}
//   />
//   <Chip
//     title="Recommended for you"
//     handleClick={() => handleClick('Recommended for you')}
//     active={active}
//   />
// </View>

// <CommonTopTab data={dataMap2} />

// <CommonCarousel
//   data={SummerCarouselData}
//   width={width}
//   height={410}
//   customStyle={{paddingTop: 25}}
// />
// <View style={Styles.box}>
//   <LifeStyleCard />
// </View>
// <CommonTopTab data={dataMap} />
// <StoriesCard
//   data={StoriesCardData}
//   title={GetStoriesTitle}
//   custumStyles={Styles.storycardbox}
// />
