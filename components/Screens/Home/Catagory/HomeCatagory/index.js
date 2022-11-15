import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopGallery from './TopGallery';
import {Colors} from '../../../../../assets/Colors';
import StoriesCard from '../../../../Common/StoriesCard';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import PointDetailCard from '../../../../Common/PointDetailCard';
import {
  HomeCatagoryTab4,
  HomeCatagoryTab3,
  HomeCatagoryTab2,
  HomeCatagoryTab1,
} from '../../../../../constant';
import CommonTopTab from '../../../../Common/CommonTopTab';
import LifeStyleCard from './LifeStyleCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import SimpleCard from '../../../../Common/SimpleCard';
import Chip from '../../../../Common/Chip';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import CommonBanner from '../../../../Common/CommonBanner';
import InteriorCatagory from '../../../../Common/InteriorCatagory';
import HomeMade from '../HomeDecorCatagory/HomeMade';
import HomeDecor from '../../../../Common/HomeDecor';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
const width = Dimensions.get('window').width;

export default function HomeCatagory() {
  const [active, setActive] = React.useState('Bestsellers');
  const [Ids, setIds] = React.useState([]);
  const [dashboardData, setDashboardData] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'fabindiab2c/cms/pages?pageType=ContentPage&pageLabelOrId=%2Fhome-living&lang=en&curr=INR',
    );
    setDashboardData(response.contentSlots.contentSlot);
    getIds(response.contentSlots.contentSlot);
  };
  const getIds = data => {
    let datas = [];
    const newArray = data.map(item => {
      datas.push(item.position);
      return datas;
    });
    setIds(datas);
  };

  React.useEffect(() => {
    getInitialData();
  }, []);
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
  const SimpleCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <SimpleCard />
          <SimpleCard />
        </ScrollView>
      </>
    );
  };
  // Tab 1
  const screenObj1 = {
    Bedsheets: SimpleCardList,
    Bedcovers: SimpleCardList,
    'Bath Linen': SimpleCardList,
    'Pillow Covers': SimpleCardList,
  };
  const dataMap1 = HomeCatagoryTab1.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  // Tab 2
  const screenObj2 = {
    Cotton: SimpleCardList,
    Linen: SimpleCardList,
    Silk: SimpleCardList,
    'Cotton Linen': SimpleCardList,
    'Cotton Silk': SimpleCardList,
  };
  const dataMap2 = HomeCatagoryTab2.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  // Tab 3
  const screenObj3 = {
    'Table Covers': SimpleCardList,
    'Table Napkins': SimpleCardList,
    Runners: SimpleCardList,
    Mats: SimpleCardList,
  };
  const dataMap3 = HomeCatagoryTab3.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  // Tab4
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
  const screenObj4 = {
    'Meals at Home': PointDetailCardList,
    'Room Makeover': PointDetailCardList,
    Staycation: PointDetailCardList,
  };
  const dataMap4 = HomeCatagoryTab4.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
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
  const SummerCarousel = () => {
    return (
      <>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            lineHeight: 35,
            fontFamily: Fonts.PlayfairDisplay400Italic,
          }}>
          Set for the summer?
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
          Bring some an elegant mix of bath and bed linen
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
  const bannerHeading1 = () => {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 26,
              color: 'white',
              fontFamily: Fonts.Assistant300,
            }}>
            ADD A
          </Text>
          <Text
            style={{
              fontSize: 26,
              paddingLeft: 5,
              fontFamily: Fonts.Assistant700,
              color: 'white',
            }}>
            MONOGRAM
          </Text>
        </View>
        <Text
          style={{
            paddingVertical: 15,
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: 'white',
            lineHeight: 22,
          }}>
          Add a personal touch to your home linen with our new monogram service!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 15,
            alignSelf: 'flex-start',
            borderRadius: 40,
            marginTop: 10,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Assistant400,
              color: '#903233',
            }}>
            Add a monogram
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  const handleClick = data => {
    setActive(data);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
      }}>
      {/* <TopGallery /> */}
      {Ids.includes('Section1') && (
        <TopSwiper data={dashboardData} position="Section1" />
      )}
      {/* <TopSwiper
        data={[
          {banner: image.kidinterior1},
          {banner: image.banner1},
          {banner: image.kidinterior2},
        ]}
      /> */}
      <HomeDecor heading="Home Linen" description="Handcraft for your home" />
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
      {/* <View style={{marginLeft: 15, height: 440}}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
      <View style={{marginVertical: 30}}>
        <InteriorCatagory buttonText="Get in touch with us" />
      </View>
      <CommonBanner
        heading={bannerHeading1}
        buttonText="Customize now"
        bgImage={image.banner1}
        customViewStyle={{marginTop: 15, marginBottom: 15}}
      />
      <HomeMade />
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
      <CommonTopTab data={dataMap2} />
      <OfferCommonCarousel
        data={OfferData}
        UptoText="UPTO"
        backgroundColor={'#DB8C5F'}
        width={width / 1.07}
        height={420}
        customStyle={{marginBottom: 10, marginTop: 20}}
      />
      <HomeDecor
        heading="Brighten up your space"
        description="Luxurious & Handcrafted"
        customstyle={{marginVertical: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
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
      <CommonTopTab data={dataMap3} />
      <CommonCarousel
        data={SummerCarouselData}
        width={width / 1.07}
        height={410}
        customStyle={{paddingVertical: 25}}
      />
      <LifeStyleCard />
      <CommonTopTab data={dataMap4} />
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40, backgroundColor: '#908EA6'}}
      />
    </ScrollView>
  );
}
