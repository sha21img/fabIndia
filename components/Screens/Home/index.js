import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import HomeHeader from './HomeHeader';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {image} from '../../../assets/images';
import CommonBanner from '../../Common/CommonBanner';
import Chip from '../../Common/Chip';
import CommonTopTab from '../../Common/CommonTopTab';
import {
  WomenTabdata,
  MenTabdata,
  OfferTabData,
  HomeTabdata,
  LifeTabdata,
  hasSpaces,
} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';
import Legacy from './Legacy';
import Card from '../../Common/Card';
import StateCategory from './StateCategory';
import OfferLongCard from '../../Common/OfferLongCard';
import LookingFor from './LookingFor';
import Art_Artist from './Art_Artist';
import PointDetailCard from '../../Common/PointDetailCard';
import SimpleCard from '../../Common/SimpleCard';
import Fonts from '../../../assets/fonts';
import TopSwiper from '../../Common/TopSwiper';
const width = Dimensions.get('window').width;

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard1, title: 'Tunics'},
  {image: image.womenCard1, title: 'Tops'},
];
const MenHighlightData = [
  {image: image.menCard, title: 'Shirts'},
  {image: image.menCard1, title: 'Kurtas'},
  {image: image.menCard1, title: 'Trousers'},
];
const HomeHighlightData = [
  {image: image.homeCard, title: 'Home Linen'},
  {image: image.homeCard1, title: 'Furniture'},
  {image: image.homeCard1, title: 'Home Decor'},
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
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay800,
          }}>
          SUMMER
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            marginLeft: 10,
            fontFamily: Fonts.PlayfairDisplay400Italic,
          }}>
          Dresses
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const MenCarouselData = [
  {
    heading_btn: () => MenCarouselText(),
    banner: image.manCarousel,
  },
  {
    heading_btn: () => MenCarouselText(),
    banner: image.manCarousel,
  },
];
const MenCarouselText = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay800,
          }}>
          SUMMER
        </Text>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay400Italic,
            fontSize: 26,
            color: 'white',
            marginLeft: 10,
          }}>
          Dresses
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const HomeCarouselData = [
  {
    heading_btn: () => HomeCarouselText(),
    banner: image.HomeCarousel,
  },
  {
    heading_btn: () => HomeCarouselText(),
    banner: image.HomeCarousel,
  },
];
const HomeCarouselText = () => {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay800,
          fontSize: 24,
          color: 'white',
        }}>
        STAYCATION
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const LifeCarouselData = [
  {
    heading_btn: () => LifeCarouselText(),
    banner: image.LifeCarousel,
  },
  {
    heading_btn: () => LifeCarouselText(),
    banner: image.LifeCarousel,
  },
];
const LifeCarouselText = () => {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay800,
          fontSize: 24,
          color: 'white',
        }}>
        Lifestyle 360
      </Text>
      <Text
        style={{
          paddingVertical: 10,
          fontFamily: Fonts.Assistant400,
          fontSize: 16,
          color: 'white',
          lineHeight: 20,
        }}>
        The best of apparel, home and more - together!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const KidsCarouselData = [
  {
    heading_btn: () => KidsCarouselText(),
    banner: image.KidsCarousel,
  },
  {
    heading_btn: () => KidsCarouselText(),
    banner: image.KidsCarousel,
  },
];
const KidsCarouselText = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay800,
            fontSize: 24,
            color: 'white',
          }}>
          <Image
            source={image.whitelogo}
            style={{height: 23, width: 65}}
            resizeMode="contain"
          />
        </Text>
        <Text
          style={{
            fontFamily: Fonts.IndieFlower,
            fontSize: 24,
            color: 'white',
            marginLeft: 10,
          }}>
          Kids
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const BeautyCarouselData = [
  {
    heading_btn: () => BeautyCarouselText(),
    banner: image.BeautyCarousel,
  },
  {
    heading_btn: () => BeautyCarouselText(),
    banner: image.BeautyCarousel,
  },
];
const BeautyCarouselText = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay800,
            fontSize: 24,
            color: 'white',
          }}>
          BEAUTY
        </Text>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay400Italic,
            fontSize: 24,
            color: 'white',
            marginLeft: 10,
          }}>
          Secrets
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(74,74,74,0.7)',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: Fonts.Assistant400,
          }}>
          Explore now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const bannerHeading1 = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay700,
          }}>
          CUSTOMIZE
        </Text>
        <Text
          style={{
            fontSize: 26,
            paddingLeft: 4,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay400,
          }}>
          YOUR OWN
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
        Bring home Fabindia products that are designed by you, for you!
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
          Explore Now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const bannerHeading2 = () => {
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
          Explore Now
        </Text>
      </TouchableOpacity>
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
          paddingVertical: 10,
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
const OfferLongCardList = item => {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <OfferLongCard />
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
          paddingVertical: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <PointDetailCard />
        <PointDetailCard />
      </ScrollView>
    </>
  );
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
export default function Dashbord() {
  const [active, setActive] = React.useState('Bestsellers');
  // Tab 1
  const screenObj = {
    Saris: CardCompo,
    Tunics: CardCompo,
    Kurtas: CardCompo,
    Dresses: CardCompo,
    'Tops Shirts': CardCompo,
    Pants: CardCompo,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  // Tab 2
  const screenObj1 = {
    Shirts: CardCompo,
    Kurtas: CardCompo,
    FaceMasks: CardCompo,
    NehruJacketsBlazers: CardCompo,
    Pants: CardCompo,
  };
  const dataMap1 = MenTabdata.map(item => ({
    name: item,
    screen: screenObj1[item],
  }));
  // Tab 3
  const screenObj2 = {
    Women: OfferLongCardList,
    Men: OfferLongCardList,
    Kids: OfferLongCardList,
    HomeLinen: OfferLongCardList,
    HomeDecor: OfferLongCardList,
  };
  const dataMap2 = OfferTabData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));
  // Tab 4
  const screenObj3 = {
    HomeLinen: SimpleCardList,
    Furniture: SimpleCardList,
    HomeDecor: SimpleCardList,
  };
  const dataMap3 = HomeTabdata.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  // Tab 5
  const screenObj4 = {
    WeekendGetaway: PointDetailCardList,
    Brunchdate: PointDetailCardList,
    WorkfromHome: PointDetailCardList,
    Pants: PointDetailCardList,
  };
  const dataMap4 = LifeTabdata.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));

  const handleClick = data => {
    setActive(data);
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
            fontFamily: Fonts.PlayfairDisplay700,
          }}>
          {heading}
        </Text>
      </View>
    );
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <HomeHeader />
        <TopSwiper
          data={[
            {banner: image.kidinterior1},
            {banner: image.banner1},
            {banner: image.kidinterior2},
          ]}
        />
        {/* <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: 384}}
          source={image.Banner}>
          <HomeHeader />
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              paddingVertical: 7,
              paddingHorizontal: 15,
              alignSelf: 'flex-start',
              borderRadius: 40,
              marginVertical: 5,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontFamily: Fonts.Assistant400,
              }}>
              Tap to customize & buy!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              paddingVertical: 7,
              paddingHorizontal: 15,
              alignSelf: 'flex-start',
              borderRadius: 40,
              position: 'absolute',
              bottom: 30,
              left: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: Fonts.Assistant600,
                color: 'white',
              }}>
              #myfablife
            </Text>
          </TouchableOpacity>
        </ImageBackground> */}
        {/* <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: 110}}
          source={image.Banner2}>
          <Catagory />
        </ImageBackground> */}
        {/* <ImageBackground
          resizeMode="cover"
          style={{width: '100%', marginVertical: 10}}
          source={image.categoryBgBanner}>
          <Catagory />
        </ImageBackground>
        <NewHighlights
          title={getTitle('New in', 'Women')}
          data={WomenHighlightData}
          bgColor={{backgroundColor: '#F3E0E0'}}
          customStyle={{marginVertical: 20}}
        />
        <CommonCarousel
          data={WomenCarouselData}
          width={width / 1.07}
          height={330}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
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
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap} />
        </View>
        <CommonBanner
          heading={bannerHeading1}
          buttonText="Customize now"
          bgImage={image.banner1}
          customViewStyle={{marginTop: 30, marginBottom: 15}}
        />
        <CommonBanner
          heading={bannerHeading2}
          buttonText="Add a monogram"
          bgImage={image.banner1}
          customViewStyle={{marginTop: 15, marginBottom: 30}}
        />
        <NewHighlights
          title={getTitle('New in', 'MEN')}
          customStyle={{marginVertical: 10}}
          bgColor={{backgroundColor: '#F6EFE6'}}
          data={MenHighlightData}
        />
        <CommonCarousel
          data={MenCarouselData}
          width={width / 1.07}
          height={330}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 15,
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
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={dataMap1} />
        </View>

        <View style={{marginLeft: 15, height: 310}}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay600Italic,
              fontSize: 20,
              paddingTop: 20,
              color: Colors.textcolor,
            }}>
            Offers for you
          </Text>
          <CommonTopTab data={dataMap2} />
        </View>
        <Interior />
        <StateCategory />
        <NewHighlights
          title={getTitle('New in', 'HOME')}
          customStyle={{marginVertical: 10}}
          bgColor={{backgroundColor: '#EDE8E7'}}
          data={HomeHighlightData}
        />
        <CommonCarousel
          data={HomeCarouselData}
          width={width / 1.07}
          height={330}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
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
        <View style={{marginLeft: 15, height: 440}}>
          <CommonTopTab data={dataMap3} />
        </View>
        <LookingFor active={active} />
        <CommonCarousel
          data={LifeCarouselData}
          width={width / 1.07}
          height={330}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 15,
            marginTop: 10,
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
        <View style={{marginLeft: 15, height: 520}}>
          <CommonTopTab data={dataMap4} />
        </View>
        <CommonCarousel
          data={KidsCarouselData}
          width={width / 1.07}
          height={330}
        />
        <CommonCarousel
          data={BeautyCarouselData}
          width={width / 1.07}
          height={330}
        />
        <Art_Artist />
        <Legacy /> */}
      </ScrollView>
    </>
  );
}
