import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import React, {useEffect} from 'react';
import {getComponentData} from '../Helper';

export default function LifeStyle({
  data = {},
  title = null,
  backgroundColor = '',
  customViewStyle = {},
}) {
  const [categoryData, setCategoryData] = React.useState([]);

  React.useEffect(() => {
    getBannerIds();
  }, []);
  const getBannerIds = async () => {
    const bannerId = data.banners;
    getCategoryData(bannerId);
  };
  const getCategoryData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );

    setCategoryData(response.component);
    console.log(response, 'responseresponse');
  };
  // FabWomenCategoryPageSection5Banner2 FabWomenCategoryPageSection5Banner3 FabWomenCategoryPageSection5Banner4 FabWomenCategoryPageSection5Banner1

  const cards = categoryData.map((item, index) => {
    console.log('item', item);
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        // source={item.image}
        // source={image.ArtistImg1}
        resizeMode="cover"
        source={{
          uri: `https://apisap.fabindia.com/${item.media.url}`,
        }}
        style={[
          Styles.card,
          {
            marginTop: index % 2 != 0 ? 30 : 10,
            height: 340,
          },
        ]}>
        {/* <LinearGradient
          colors={['transparent', '#66553B']}
          style={Styles.cardBox}>
          <Text style={Styles.boxText}>{item.title}</Text>
        </LinearGradient> */}
      </ImageBackground>
    );
  });
  return (
    <View style={customViewStyle}>
      <View
        style={{
          height: '75%',
          width: '100%',
          backgroundColor: backgroundColor,
          position: 'absolute',
          zIndex: -1,
        }}></View>
      {/* {title()} */}
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600,
            color: '#4A4A4A',
            fontSize: 30,
          }}>
          {data.title}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#4A4A4A',
              lineHeight: 23,
              fontFamily: Fonts.Assistant400,
            }}>
            {data.headline}
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollContainer}>
        {cards}
        {/* <Text>lkjh</Text> */}
      </ScrollView>
      {/* <View style={[Styles.containerBox, custumStyles]}>
        
        <View style={Styles.cardContainer}>
          
        </View>
      </View> */}
    </View>
  );
}
