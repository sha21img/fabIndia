import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import {Styles} from './styles';
import NewHighlights from '../../../Common/NewHighlights';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import {WomenTabdata} from '../../../../constant';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import SummerGalary from '../../../Common/SummerGalary';
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
const MenCatagory = () => {
  const [active, setActive] = React.useState('Bestsellers');

  const handleClick = data => {
    setActive(data);
  };
  const HomeScreen = item => {
    return (
      <>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingVertical: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <Card customViewStyle={{marginRight: 10}} />
          <Card customViewStyle={{marginRight: 10}} />
        </ScrollView>
      </>
    );
  };
  const screenObj = {
    Saris: HomeScreen,
    Tunics: HomeScreen,
    Kurtas: HomeScreen,
    Dresses: HomeScreen,
    TopsShirts: HomeScreen,
    Pants: HomeScreen,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  const SummerGalaryData = [
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Dresses'},
    {image: image.womenPhoto3, name: 'Tunics'},
    {image: image.womenPhoto4, name: 'Saris'},
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
  ];
  const getTitle = () => {
    return (
      <Text
        style={{
          fontFamily: 'PlayfairDisplay-Italic',
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        Apparel
      </Text>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: Colors.backgroundColor}}>
      <View style={Styles.imagecontainer}>
        {imageData.map((item, i) => {
          return (
            <ImageBackground
              resizeMode="cover"
              style={Styles.backgroundimage}
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
              fontWeight: '300',
              fontFamily: Fonts.AssistantRegular,
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
                fontWeight: '400',
                fontFamily: Fonts.PlayfairDisplayRegular,
              }}>
              man
            </Text>
          </View>
        </View>
      </View>
      <NewHighlights title="Ethnic Wear" data={WomenHighlightData} />
      <NewHighlights title="Western Wear" data={WomenHighlightData} />
      <NewHighlights title="Accessories" data={WomenHighlightData} />
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

      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="For those sultry summer days"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 40}}
      />
    </ScrollView>
  );
};

export default MenCatagory;
