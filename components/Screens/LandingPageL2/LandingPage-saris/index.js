import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {image} from '../../../../assets/images';
import VideoPlayer from 'react-native-video-player';
import Fonts from '../../../../assets/fonts';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import {
  getColor,
  hasSpaces,
  MenCatagoryTab3,
  WomenTabdata,
} from '../../../../constant';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import NewHighlights from '../../../Common/NewHighlights';
import CommonCarousel from '../../../Common/CommonCarousel';
import OfferCommonCarousel from '../../../Common/OfferCommonCarousel';
import Collections from './Collections';
import LifeStyleCard from './LifeStyleCard';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';
import JewelleryRange from '../../../Common/JewelleryRange';
import {Styles} from './styles';
import Videos from '../../../Common/Videos';
import ColorCard from '../../../Common/ColorCard';
const width = Dimensions.get('window').width;

const LandingPageSaris = () => {
  const [paused, setPaused] = useState(true);
  const [active, setActive] = React.useState('Bestsellers');
  const [imageColors, setImageColors] = React.useState({});

  const WomenHighlightData = [
    {image: image.womenCard, title: 'Saris'},
    {image: image.womenCard1, title: 'Tunics'},
    {image: image.womenCard1, title: 'Tops'},
  ];
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
  const handleClick = data => {
    setActive(data);
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
            fontFamily: Fonts.PlayfairDisplay700Italic,
          }}>
          {heading}
        </Text>
      </View>
    );
  };
  // const getBox = (dim, title = null) => {
  //   return (
  //     <>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //         }}>
  //         <View
  //           style={{
  //             borderRadius: 50,
  //             backgroundColor: '#97B7CF',
  //             marginRight: 10,
  //             // backgroundColor: imageColors.lightMuted,
  //             height: dim,
  //             width: dim,
  //             // left: '-50%',
  //             // top: 21,
  //           }}></View>
  //         <View
  //           style={{
  //             borderRadius: 50,
  //             backgroundColor: '#477293',
  //             marginRight: 10,

  //             // backgroundColor: imageColors.muted,
  //             height: dim,
  //             width: dim,
  //             // left: '-40%',
  //             // top: 21,
  //           }}></View>
  //         <View
  //           style={{
  //             borderRadius: 50,
  //             backgroundColor: '#1C384F',
  //             marginRight: 10,

  //             // backgroundColor: imageColors.darkMuted,
  //             height: dim,
  //             width: dim,
  //             // top: 21,
  //             // left: '-30%',
  //           }}></View>
  //       </View>
  //       {title}
  //     </>
  //   );
  // };
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
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
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
  // const getTitles = (title, heading) => {
  //   return (
  //     <View style={{alignItems: 'center'}}>
  //       <Text
  //         style={{
  //           color: 'white',
  //           fontFamily: Fonts.Assistant400,
  //           fontSize: 14,
  //         }}>
  //         {title}
  //       </Text>
  //       {heading && (
  //         <Text
  //           style={{
  //             color: 'white',
  //             fontFamily: Fonts.PlayfairDisplay400Italic,
  //             fontSize: 28,
  //           }}>
  //           {heading}
  //         </Text>
  //       )}
  //     </View>
  //   );
  // };
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
  const getBox = (dim, title = null) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#97B7CF',
              marginRight: 10,
              // backgroundColor: imageColors.lightMuted,
              height: dim,
              width: dim,
            }}></View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#477293',
              marginRight: 10,

              // backgroundColor: imageColors.muted,
              height: dim,
              width: dim,
            }}></View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#1C384F',
              marginRight: 10,

              // backgroundColor: imageColors.darkMuted,
              height: dim,
              width: dim,
            }}></View>
        </View>
      </>
    );
  };
  const cardData = [
    {
      getTitles: getTitles('Beige & Neutrals', ''),
      getBox: getBox(46),
    },
    {
      getTitles: getTitles('Beige & Neutrals', ''),
      getBox: getBox(46),
    },
    {
      getTitles: getTitles('Beige & Neutrals', ''),
      getBox: getBox(46),
    },
  ];
  const text = () => {
    return (
      <>
        <View style={Styles.videotxtbox}>
          <View style={Styles.topheadbox}>
            <Text style={Styles.topheadtxt}>ONE SARI</Text>
          </View>
          <View style={Styles.bottomheadbox}>
            <Text style={Styles.bottomheadtxt}>FIVE DRAPES</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <JewelleryRange
        title={() => (
          <Text style={Styles.jewellerytxt}>Saris for every mood</Text>
        )}
        JewelleryRangeData={JewelleryRangeData}
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
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap} />
      {/* </View> */}
      <NewHighlights
        title={getTitle('It’s all about the', 'fabric')}
        data={WomenHighlightData}
        bgColor={{backgroundColor: '#EDEDED'}}
        customStyle={{marginVertical: 40}}
      />
      <CommonCarousel data={WomenCarouselData} width={width} height={200} />
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
      {/* <View style={{marginLeft: 15, height: 470}}> */}
      <CommonTopTab data={dataMap} />
      {/* </View> */}
      <ColorCard
        getBox={getBox(79)}
        getTitles={getTitles('Our Colour of the Season', 'Hues of BLUE')}
        cardData={cardData}
      />
      {/* <View style={Styles.cardbox}>
        <Text style={Styles.cardtxt}>What’s your color?</Text>
        <ImageBackground
          onLoadStart={async () => {
            const color = await getColor(image.huesblue);
            setImageColors(color);
          }}
          resizeMode="cover"
          source={image.huesblue}
          style={Styles.backgoundimage}>
          <View style={Styles.backgroundimagebox}>
            {getBox(79)}
            {getTitles('Our Colour of the Season', 'Hues of BLUE')}
          </View>
        </ImageBackground>

        <ScrollView horizontal>
          {[0, 1, 2].map(it => {
            return (
              <ImageBackground
                onLoadStart={async () => {
                  const color = await getColor(image.huesblue);
                  setImageColors(color);
                }}
                resizeMode="cover"
                source={image.huesblue}
                style={Styles.backgoundimage1}>
                <View style={Styles.backgroundimagebox1}>
                  {getBox(46)}
                  {getTitles('Beige & Neutrals', '')}
                </View>
              </ImageBackground>
            );
          })}
        </ScrollView>
      </View> */}

      <CommonCarousel
        data={WomenCarouselData1}
        width={width}
        height={200}
        customStyle={{marginTop: 40}}
      />
      <View style={Styles.catbox}>
        <Text style={Styles.playpatterntxt}>Play with patterns</Text>
        <ScrollView horizontal contentContainerStyle={Styles.scrollcont}>
          {/* <View style={{height: 270, flexDirection: 'column'}}> */}
          {[0, 1, 2, 3, 4, 5].map(it => {
            return (
              <ImageBackground
                resizeMode="cover"
                source={image.huesblue}
                imageStyle={{borderRadius: 100}}
                style={Styles.backgroundimagebox2}>
                <View style={Styles.txtbox}>
                  <Text style={Styles.txt}>Woven</Text>
                </View>
              </ImageBackground>
            );
          })}
          {/* </View> */}
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
      {/* <View style={{marginLeft: 15, height: 470}}> */}
      <CommonTopTab data={dataMap} />
      {/* </View> */}
      <OfferCommonCarousel
        data={OfferData}
        backgroundColor={'#DB8C5F'}
        width={width}
        height={430}
        customStyle={{marginTop: 40}}
      />
      <Collections customStyle={{paddingTop: 40}} />
      <LifeStyleCard />
      {/* <View style={{paddingLeft: 15, height: 540, paddingTop: 20}}> */}
      <CommonTopTab data={dataMap3} />
      {/* </View> */}
      <StoriesCard
        data={StoriesCardData}
        title={GetStoriesTitle}
        custumStyles={{marginTop: 40}}
      />
    </ScrollView>
  );
};

export default LandingPageSaris;
