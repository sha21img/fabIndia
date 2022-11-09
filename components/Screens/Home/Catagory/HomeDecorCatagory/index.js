import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import TopGallary from './TopGallery';
import InteriorCatagory from '../../../../Common/InteriorCatagory';
import Fonts from '../../../../../assets/fonts';
import HomeMade from './HomeMade';
import HomeDecor from '../../../../Common/HomeDecor';
import Chip from '../../../../Common/Chip';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {
  HomeCatagoryTab4,
  HomeDecorTableData,
  HomeDecorTableData1,
  HomeDecorTableData2,
  KidsTableData,
} from '../../../../../constant';
import SimpleCard from '../../../../Common/SimpleCard';
import CommonBanner from '../../../../Common/CommonBanner';
import {image} from '../../../../../assets/images';
import OfferCommonCarousel from '../../../../Common/OfferCommonCarousel';
import ArCarousel from '../../../../Common/ArCarousel';
import CommonCarousel from '../../../../Common/CommonCarousel';
import LifeStyleCard from '../HomeCatagory/LifeStyleCard';
import StoriesCard from '../../../../Common/StoriesCard';
import PointDetailCard from '../../../../Common/PointDetailCard';
import {Styles} from './styles';
import TopSwiper from '../../../../Common/TopSwiper';
const width = Dimensions.get('window').width;
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
const HomeDecorCatagory = () => {
  const [active, setActive] = React.useState('Bestsellers');

  const handleClick = data => {
    setActive(data);
  };
  const SimpleCardList = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
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
  const KidsCardList = item => {
    return (
      <>
        <ArCarousel data={data} width={width / 1.1} height={380} />
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
            paddingVertical: 10,
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
  const StoriesCardData = [
    {
      Image: image.homeStoryCardPic,
      description: 'Tanya mixes and matches bed linen to create a cozy rooms',
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
        Light it up with
      </Text>
    );
  };
  const getDescription = () => {
    return (
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.PlayfairDisplay700,
          color: '#ffffff',
        }}>
        LAMPS
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
  const screenObj = {
    Dinnerware: SimpleCardList,
    Drinkware: SimpleCardList,
    Serveware: SimpleCardList,
    Flatware: SimpleCardList,
  };
  const screenObj1 = {
    'Morning Chai': SimpleCardList,
    'Casual Lunch': SimpleCardList,
    'Dinner Party': SimpleCardList,
  };
  const dataMap = HomeDecorTableData.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  const dataMap1 = HomeDecorTableData1.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  const screenObj2 = {
    Lamps: KidsCardList,
    'Lamp Shades': KidsCardList,
    'Hanging & String Lights': KidsCardList,
  };
  const dataMap2 = HomeDecorTableData2.map(item => ({
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
            fontFamily: Fonts.PlayfairDisplay400Italic,
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
          Choose from our collection of candles and tea lights to brighten up
          your home
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

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      {/* <TopGallary /> */}
      <TopSwiper
        data={[
          {banner: image.kidinterior1},
          {banner: image.banner1},
          {banner: image.kidinterior2},
        ]}
      />
      <HomeDecor heading="Home Décor" description="Handcrafted for your home" />
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
      <View style={Styles.commontabbox}>
        <CommonTopTab data={dataMap} />
      </View>
      <View style={Styles.box}>
        <InteriorCatagory />
      </View>

      <View style={Styles.box}>
        <HomeMade />
      </View>
      <View style={Styles.chipbox}>
        <Chip
          title="Ocassion"
          handleClick={() => handleClick('Ocassion')}
          active={active}
        />
        <Chip
          title="Ocassion"
          handleClick={() => handleClick('Products')}
          active={active}
        />
        <Chip
          title="Material"
          handleClick={() => handleClick('Material')}
          active={active}
        />
      </View>
      <View style={Styles.commontabbox}>
        <CommonTopTab data={dataMap1} />
      </View>

      <OfferCommonCarousel
        data={OfferData}
        UptoText="UPTO"
        backgroundColor={'#DB8C5F'}
        width={width}
        height={420}
        customStyle={Styles.box}
      />
      <HomeDecor
        heading="Beauty in every corner"
        description="Lighting, photo frames & more!"
        customstyle={Styles.box}
      />
      <View style={Styles.chipbox}>
        <Chip
          title="Ocassion"
          handleClick={() => handleClick('Ocassion')}
          active={active}
        />
        <Chip
          title="Ocassion"
          handleClick={() => handleClick('Products')}
          active={active}
        />
        <Chip
          title="Material"
          handleClick={() => handleClick('Material')}
          active={active}
        />
      </View>
      <View style={Styles.commontabbox}>
        <CommonTopTab data={dataMap2} />
      </View>

      <CommonCarousel
        data={SummerCarouselData}
        width={width}
        height={410}
        customStyle={{paddingTop: 25}}
      />
      <View style={Styles.box}>
        <LifeStyleCard />
      </View>
      <View style={Styles.commontabbox1}>
        <CommonTopTab data={dataMap4} />
      </View>
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40, backgroundColor: '#908EA6'}}
      />
    </ScrollView>
  );
};

export default HomeDecorCatagory;
