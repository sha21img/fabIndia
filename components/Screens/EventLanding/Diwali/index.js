import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';
import {LifeTabdata, WomenTabdata} from '../../../../constant';
import Card from '../../../Common/Card';
import Chip from '../../../Common/Chip';
import CommonCarousel from '../../../Common/CommonCarousel';
import CommonTopTab from '../../../Common/CommonTopTab';
import HomeEventDiwali from '../../../Common/HomeEventDiwali';
import KidsEventDiwali from '../../../Common/KidsEventDiwali';
import LifeStyle from '../../../Common/LifeStyle';
import PointDetailCard from '../../../Common/PointDetailCard';
import StoriesCard from '../../../Common/StoriesCard';
import SummerGalary from '../../../Common/SummerGalary';
import {Styles} from './style';
const width = Dimensions.get('window').width;
const Diwali = () => {
  const [active, setActive] = React.useState('Bestsellers');

  const KidsEventData = [
    {
      name: 'Girls Apparel',
      banner: image.EventKid1,
    },
    {
      name: 'Boys Apparel',
      banner: image.EventKid2,
    },
  ];
  const HomeEventData = [
    {
      name: 'Girls Apparel',
      banner: image.EventKid1,
    },
    {
      name: 'Boys Apparel',
      banner: image.EventKid2,
    },
    {
      name: 'Girls Apparel',
      banner: image.EventKid1,
    },
    {
      name: 'Boys Apparel',
      banner: image.EventKid2,
    },
    {
      name: 'Girls Apparel',
      banner: image.EventKid1,
    },
    {
      name: 'Boys Apparel',
      banner: image.EventKid2,
    },
  ];
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
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
            paddingTop: 30,
          }}>
          Diwali
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
  const screenObj = {
    Saris: CardCompo,
    Tunics: CardCompo,
    Kurtas: CardCompo,
    Dresses: CardCompo,
    'Tops Shirts': CardCompo,
    Pants: CardCompo,
  };

  const LifeStyleData = [
    {image: image.womenPhoto1, name: 'Work from Home'},
    {image: image.womenPhoto2, name: 'Summer afternoons'},
    {image: image.womenPhoto3, name: 'Summer afternoons'},
    {image: image.womenPhoto4, name: 'Work from Home'},
  ];
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  const handleClick = data => {
    setActive(data);
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
            color: '#FFFFFF',
            fontSize: 30,
          }}>
          Lifestyle 360
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#FFFFFF',
              lineHeight: 23,
              fontFamily: Fonts.Assistant400,
            }}>
            Diwali Combos
          </Text>
        </View>
      </View>
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
    WeekendGetaway: PointDetailCardList,
    Brunchdate: PointDetailCardList,
    WorkfromHome: PointDetailCardList,
    Pants: PointDetailCardList,
  };
  const dataMap4 = LifeTabdata.map(item => ({
    name: item,
    screen: screenObj4[item],
  }));
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.womencardbox}>
        <Text style={Styles.womentxt}>WOMEN</Text>
        <Text style={Styles.headtxt}>
          Let the light shine on you this Diwali! With our exquisite range of
          saris, kurta sets, juttis and jewellery sets, you’ll be looking every
          inch the goddess that you are.
        </Text>
        <ImageBackground
          source={image.ArtistImg1}
          style={{
            width: width / 1.09,
            height: 250,
            marginTop: 10,
          }}>
          <LinearGradient
            colors={['transparent', '#3C3A39']}
            style={[Styles.gradient, {height: 90}]}>
            <Text style={Styles.imagehead}>DIWALI 2021</Text>
            <Text style={Styles.imagedescription}>Festive Specials</Text>
          </LinearGradient>
        </ImageBackground>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingTop: 10,
          }}>
          {[0, 0, 0].map(item => {
            return (
              <ImageBackground
                source={image.ArtistImg1}
                style={{width: width / 1.9, height: 180, marginRight: 10}}>
                <LinearGradient
                  colors={['transparent', '#3C3A39']}
                  style={[Styles.gradient, {height: 60}]}>
                  <Text style={Styles.scrollimagetxt}>Saris</Text>
                </LinearGradient>
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
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap} />
      {/* </View> */}
      <KidsEventDiwali
        customViewStyle={{marginTop: 30}}
        data={KidsEventData}
        title={() => (
          <View style={Styles.eventbox}>
            <Text style={Styles.eventtxt}>Kids</Text>
            <Text style={Styles.eventdescriptiontxt}>
              Weaving happiness for festivities. Cutest sets for the cutest
              kids! Enrich your kid’s day with fun & laughter this festive
              season.
            </Text>
          </View>
        )}
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
      <HomeEventDiwali
        customViewStyle={{marginTop: 30, backgroundColor: '#C4C4C4'}}
        data={HomeEventData}
        title={() => (
          <View style={Styles.eventbox}>
            <Text style={Styles.eventtxt}>Home</Text>
            <Text style={Styles.eventdescriptiontxt}>
              Give your home the light it needs this Diwali with our range of
              home decor, home linen and furniture. Whether you’re hosting, or
              attending a Diwali party - it’s all right here!
            </Text>
          </View>
        )}
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
        data={SummerCarouselData}
        width={width / 1.07}
        height={330}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 24,
          backgroundColor: '#F3E0E0',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay700Italic,
            fontSize: 24,
            color: Colors.textcolor,
            textAlign: 'center',
            lineHeight: 32,
          }}>
          WOMEN
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 14,
            color: Colors.textcolor,
            textAlign: 'center',
            lineHeight: 18,
            marginTop: 10,
          }}>
          Let the light shine on you this Diwali! With our exquisite range of
          saris, kurta sets, juttis and jewellery sets, you’ll be looking every
          inch the goddess that you are.
        </Text>
        <ImageBackground
          source={image.ArtistImg1}
          style={{
            width: width / 1.09,
            height: 250,
            marginTop: 10,
          }}>
          <LinearGradient
            colors={['transparent', '#3C3A39']}
            style={{
              position: 'absolute',
              bottom: 0,
              height: 90,
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontFamily: Fonts.PlayfairDisplay600Italic,
                fontSize: 14,
                color: '#FFFFFF',
                lineHeight: 19,
              }}>
              DIWALI 2021
            </Text>
            <Text
              style={{
                fontFamily: Fonts.PlayfairDisplay500Italic,
                fontSize: 24,
                color: '#FFFFFF',
                lineHeight: 32,
              }}>
              Festive Specials
            </Text>
          </LinearGradient>
        </ImageBackground>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingTop: 10,
          }}>
          {[0, 0, 0].map(item => {
            return (
              <ImageBackground
                source={image.ArtistImg1}
                style={{width: width / 1.9, height: 180, marginRight: 10}}>
                <LinearGradient
                  colors={['transparent', '#3C3A39']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 60,
                    width: '100%',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Assistant400,
                      fontSize: 16,
                      color: '#FFFFFF',
                      lineHeight: 32,
                    }}>
                    Saris
                  </Text>
                </LinearGradient>
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
      <CommonCarousel
        data={SummerCarouselData}
        width={width / 1.07}
        height={330}
      />
      <LifeStyle
        data={LifeStyleData}
        title={GetLifeStyleTitle}
        backgroundColor="#903233"
      />
      <CommonTopTab data={dataMap4} />
      <StoriesCard
        custumStyles={{marginTop: 15, backgroundColor: '#C5A575'}}
        data={StoriesCardData}
        title={GetStoriesTitle}
      />
    </ScrollView>
  );
};
export default Diwali;
