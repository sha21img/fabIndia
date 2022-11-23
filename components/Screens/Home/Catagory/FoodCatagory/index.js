import {
  View,
  Text,
  ScrollView,
  FlatList,
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
  LandingPageL1Food,
} from '../../../../../constant';
import SimpleCard from '../../../../Common/SimpleCard';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import CommonCarousel from '../../../../Common/CommonCarousel';
import LifeStyleCard from './LifeStyleCard';
import StoriesCard from '../../../../Common/StoriesCard';
import PointDetailCard from '../../../../Common/PointDetailCard';
import FoodReceips from './FoodReceips';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import CollectionCard from '../../../../Common/CollectionCard';
import SingleBanner from '../../../../Common/SingleBanner';
import WomenTab from '../../Tabs.js/WomenTab';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
const width = Dimensions.get('window').width;

export default function FoodCatagory() {
  const [filteredComp, setFilteredComp] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'fabindiab2c/cms/pages?pageType=ContentPage&pageLabelOrId=%2FFood&lang=en&curr=INR',
    );
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Food.map(sectionId => {
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
      // case 'FabTitleCMSTabContainer':
      //   return <Text>dsfdfg</Text>
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
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
      // section8 grid
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            data={param}
            width={width / 1.07}
            height={330}
            customStyle={{marginVertical: 10}}
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
      data={filteredComp}
      keyExtractor={(item, index) => index}
      renderItem={item => checkSwitch(item.item)}
    />
  );
}

//

{
  /* <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}> */
}

{
  /* <TopGallery /> */
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
      /> */
}
// <SummerGalary
//   data={SummerGalaryData}
//   title={getSummerTitle()}
//   subtitles="All things natural, organic and healthy"
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
{
  /* <View style={{marginLeft: 15, height: 440}}> */
}
// <CommonTopTab data={dataMap1} />
{
  /* </View> */
}
{
  /* <OfferCommonCarousel
  data={OfferData}
  UptoText="UPTO"
  backgroundColor={'#DB8C5F'}
  width={width / 1.07}
  height={420}
  customStyle={{marginVertical: 20}}
/>; */
}
{
  /* <SummerGalary
        data={HomeProductData}
        title={getSummerTitle1()}
        subtitles="Rejuvenate every morning!"
        backgroundColor="#EFE5E0"
        customViewStyle={{marginBottom: 50, marginTop: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 5,
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
      <CommonTopTab data={dataMap2} /> */
}
// <CommonCarousel data={WomenCarouselData} width={width} height={410} />
// <SummerGalary
//   data={HomeProductData}
//   title={getSummerTitle1()}
//   subtitles="Rejuvenate every morning!"
//   backgroundColor="#EFE5E0"
//   customViewStyle={{marginBottom: 50, marginTop: 20}}
// />
// <LifeStyleCard />
//   <CommonTopTab data={dataMap3} />
//   <FoodReceips
//     heading={ReceipsCardHeading}
//     customStyle={{backgroundColor: '#CFA566'}}
//     data={ReceipsCardData}
//   />
// </ScrollView>
