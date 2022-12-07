import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Videos from '../../../Common/Videos';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../../assets/images';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import {HomeCatagoryTab4, WomenTabdata} from '../../../../constant';
import Card from '../../../Common/Card';
import ArCarousel from '../../../Common/ArCarousel';
import OfferCommonCarousel from '../../../Common/OfferCommonCarousel';
import CommonCarousel from '../../../Common/CommonCarousel';
import Collections from './Collections';
import CommonBanner from '../../../Common/CommonBanner';
import LifeStyleCard from './LifeStyleCard';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';
const width = Dimensions.get('window').width;

const LandingPagebedroom = () => {
  const [active, setActive] = React.useState('Bestsellers');

  const text = () => {
    return (
      <>
        <View style={Styles.videotxtbox}>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              fontSize: 16,
              color: Colors.textcolor,
            }}>
            The Singhs,
            <Text
              style={{
                fontFamily: Fonts.Assistant400,
                fontSize: 16,
                color: Colors.textcolor,
              }}>
              Pune
            </Text>
          </Text>
        </View>
      </>
    );
  };
  const LifeStyleData = [
    {image: image.womenPhoto1, name: 'Beauty Bundle'},
    {image: image.womenPhoto2, name: 'Summer afternoons'},
  ];
  const cards = LifeStyleData.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.image}
        style={{
          width: 188,
          marginRight: 15,
          marginTop: 10,
          height: 300,
        }}>
        <LinearGradient
          colors={['transparent', '#76586E']}
          style={{
            marginTop: 'auto',
          }}>
          <Text
            style={{
              paddingTop: 30,
              paddingBottom: 20,
              paddingLeft: 10,
              color: '#FFFFFF',
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
            }}>
            {item.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  const cards1 = LifeStyleData.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.image}
        resizeMode="cover"
        style={{
          width: 290,
          marginRight: 15,
          marginTop: 10,
          height: 146,
        }}>
        <LinearGradient
          colors={['transparent', '#76586E']}
          style={{
            marginTop: 'auto',
          }}>
          <Text
            style={{
              paddingTop: 30,
              paddingBottom: 20,
              paddingLeft: 10,
              color: '#FFFFFF',
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
            }}>
            {item.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  const data = [
    {
      banner: image.WomenCarousel,
    },
    {
      banner: image.WomenCarousel,
    },
  ];
  const CardCompo = item => {
    return <ArCarousel data={data} width={width / 1.07} height={380} />;
  };
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
  const handleClick = data => {
    setActive(data);
  };
  const getOfferTitleHeading = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay800,
            color: '#ffffff',
            lineHeight: 35,
            marginRight: 10,
          }}>
          SUMMER
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: Fonts.PlayfairDisplay400Italic,
            color: '#ffffff',
            lineHeight: 35,
          }}>
          SILKS
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
        Exciting deals on easy, breezy lightweight silks for the summer!
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
  const WomenCarouselText1 = () => {
    return (
      <>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: 'white',
              fontFamily: Fonts.PlayfairDisplay700Italic,
            }}>
            For the Golden Girl
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: Fonts.Assistant400,
            }}>
            A sari collection in shades of yellow, lined with exquisite zari and
            teamed with gold jewellery!
          </Text>
        </View>
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
              color: Colors.primarycolor,
              fontFamily: Fonts.Assistant400,
            }}>
            Explore now
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  const WomenCarouselData1 = [
    {
      heading_btn: () => WomenCarouselText1(),
      banner: image.WomenCarousel,
    },
    {
      heading_btn: () => WomenCarouselText1(),
      banner: image.WomenCarousel,
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
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <View>
        <View
          style={{
            height: '75%',
            width: '100%',
            position: 'absolute',
            backgroundColor: '#F6EFE6',
            zIndex: -1,
          }}></View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 300,
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          {cards}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 150,
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          {cards1}
        </ScrollView>
      </View>

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
      <OfferCommonCarousel
        data={OfferData}
        backgroundColor={'#EDEDED'}
        width={width}
        height={430}
        customStyle={{marginTop: 40}}
      />
      <View>
        <View
          style={{
            height: '75%',
            width: '100%',
            position: 'absolute',
            backgroundColor: '#F6EFE6',
            zIndex: -1,
          }}></View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 300,
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          {cards}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 150,
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          {cards1}
        </ScrollView>
      </View>
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
      <CommonCarousel
        data={WomenCarouselData1}
        width={width}
        height={200}
        customStyle={{marginTop: 40}}
      />
      <Collections customStyle={{paddingTop: 40}} />
      <CommonBanner
        heading={bannerHeading1}
        buttonText="Customize now"
        bgImage={image.banner1}
        customViewStyle={{marginTop: 30, marginBottom: 15}}
      />
      <View style={{marginTop: 40}}>
        <LifeStyleCard />
      </View>
      <CommonTopTab data={dataMap4} />
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={Styles.storycardbox}
      />
    </ScrollView>
  );
};

export default LandingPagebedroom;
