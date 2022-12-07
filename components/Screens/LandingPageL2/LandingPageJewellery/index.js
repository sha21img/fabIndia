import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Videos from '../../../Common/Videos';
import {Styles} from './styles';
import JewelleryRange from '../../../Common/JewelleryRange';
import {image} from '../../../../assets/images';
import NewHighlights from '../../../Common/NewHighlights';
import {hasSpaces, MenCatagoryTab3, WomenTabdata} from '../../../../constant';
import Fonts from '../../../../assets/fonts';
import CommonTopTab from '../../../Common/CommonTopTab';
import {Colors} from '../../../../assets/Colors';
import Card from '../../../Common/Card';
import CommonCarousel from '../../../Common/CommonCarousel';
import Chip from '../../../Common/Chip';
import ColorCard from '../../../Common/ColorCard';
import OfferCommonCarousel from '../../../Common/OfferCommonCarousel';
import Collections from './Collections';
import LifeStyleCard from './LifeStyleCard';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';
const width = Dimensions.get('window').width;

const LandingPageJewellery = () => {
  const [active, setActive] = React.useState('Bestsellers');

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
  const text = () => {
    return (
      <>
        <View style={Styles.videotxtbox}>
          <View style={Styles.topheadbox}>
            <Text style={Styles.topheadtxt}>
              Layer a choker with a necklace or two to spruce up a
            </Text>
          </View>
          <View style={Styles.topheadbox}>
            <Text style={Styles.topheadtxt}>white shirt or kurta!</Text>
          </View>
        </View>
      </>
    );
  };

  const WomenHighlightData = [
    {image: image.womenCard, title: 'Saris'},
    {image: image.womenCard1, title: 'Tunics'},
    {image: image.womenCard1, title: 'Tops'},
  ];
  const getTitle = heading => {
    return (
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces(heading) ? {width: width / 3} : {width: null},
        ]}>
        <Text
          style={{
            color: '#4A4A4A',
            fontSize: 20,
            fontFamily: Fonts.PlayfairDisplay600Italic,
          }}>
          {heading}
        </Text>
      </View>
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
  const GetStoriesTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 30,
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
  const WomenCarouselText = () => {
    return (
      <>
        <View
          style={{
            position: 'absolute',
            left: 20,
            bottom: 20,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: 'white',
              fontFamily: Fonts.PlayfairDisplay700Italic,
            }}>
            Style Speak
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: Fonts.Assistant400,
            }}>
            Update your wardrobe with some must-haves listed by our Fab
            Stylists!
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 40,
              alignSelf: 'flex-start',
              paddingHorizontal: 15,
              paddingVertical: 5,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.primarycolor,
                fontFamily: Fonts.Assistant400,
              }}>
              View styles
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
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
  const handleClick = data => {
    setActive(data);
  };

  const getTitles = (title, heading) => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: Fonts.Assistant400,
            fontSize: 14,
          }}>
          {title}
        </Text>
        {heading && (
          <Text
            style={{
              color: 'white',
              fontFamily: Fonts.PlayfairDisplay400Italic,
              fontSize: 28,
            }}>
            {heading}
          </Text>
        )}
      </View>
    );
  };
  const cardData = [
    {
      getTitles: getTitles('Beige & Neutrals', ''),
    },
    {
      getTitles: getTitles('Beige & Neutrals', ''),
    },
    {
      getTitles: getTitles('Beige & Neutrals', ''),
    },
  ];
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
  const screenObj4 = {
    'Lounging Around': HomeScreen1,
    'Work from Home': HomeScreen1,
    'In the Kitchen': HomeScreen1,
  };
  const dataMap3 = MenCatagoryTab3.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
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
          OXIDIZED
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: Fonts.PlayfairDisplay400Italic,
            color: '#ffffff',
            lineHeight: 35,
          }}>
          silver
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
        A collection of oxidized silver jewellery for every mood, every style!
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

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 30,
        backgroundColor: '#FFFFFF',
      }}>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <JewelleryRange
        title={() => (
          <Text style={Styles.jewellerytxt}>
            A range of jewellery for every ocassion!
          </Text>
        )}
        backgroundColor="#EDEDED"
        JewelleryRangeData={JewelleryRangeData}
      />
      <NewHighlights
        title={getTitle('Earrings')}
        data={WomenHighlightData}
        bgColor={{backgroundColor: '#EDEDED'}}
        customStyle={{marginTop: 15}}
      />
      <NewHighlights
        title={getTitle('Necklaces')}
        data={WomenHighlightData}
        bgColor={{backgroundColor: '#EDEDED'}}
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
      <CommonCarousel
        data={WomenCarouselData}
        width={width}
        height={200}
        customStyle={{paddingTop: 40}}
      />
      <View style={Styles.catbox}>
        <Text style={Styles.playpatterntxt}>Get your shine on!</Text>
        <ScrollView horizontal contentContainerStyle={Styles.scrollcont}>
          {[0, 1, 2, 3, 4, 5].map(it => {
            return (
              <ImageBackground
                resizeMode="cover"
                source={image.huesblue}
                imageStyle={{borderRadius: 100}}
                style={Styles.backgroundimagebox2}>
                <View style={Styles.txtbox}>
                  <Text style={Styles.txt}>Silver</Text>
                </View>
              </ImageBackground>
            );
          })}
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
      <ColorCard
        getTitles={getTitles('Our Colour of the Season', 'Hues of BLUE')}
        cardData={cardData}
      />
      <OfferCommonCarousel
        data={OfferData}
        backgroundColor={'#DB8C5F'}
        width={width}
        height={420}
        customStyle={{marginVertical: 20}}
      />
      <Collections customStyle={{paddingTop: 40}} />
      <LifeStyleCard />
      <CommonTopTab data={dataMap3} />
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40}}
      />
    </ScrollView>
  );
};

export default LandingPageJewellery;
