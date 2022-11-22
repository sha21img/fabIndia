import react from 'react';
import {
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';

export default function LifeStyle({
  data = {},
  title = null,
  backgroundColor = '',
  customViewStyle = {},
}) {
  const [categoryData, setCategoryData] = React.useState([]);
  const [page, setPage] = useState(0);
  const [array, setArray] = useState([]);

  const getBannerIds = async () => {
    const bannerId = data.banners;
    const splitBannerId = bannerId.split(' ').join(',');
    getCategoryData(splitBannerId);
  };
  const getCategoryData = async bannerId => {
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${bannerId}&lang=en&curr=INR`,
    );
    setPage(page + 1);
    setCategoryData(response);
    if (array.length) {
      setArray(prev => [...prev, ...response.component]);
    } else {
      setArray(response.component);
    }
    console.log(response, 'responseresponse');
  };
  useEffect(() => {
    getBannerIds();
  }, []);
  const endReach = () => {
    if (categoryData?.pagination?.totalPages > page) {
      getBannerIds();
    }
  };

  const cards = (item, index) => {
    console.log('item', item);
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        resizeMode="cover"
        source={{
          uri: `https://apisap.fabindia.com/${item.item.media.url}`,
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
  };
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

      <FlatList
        horizontal
        data={array}
        onEndReached={endReach}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={cards}
      />
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollContainer}>
        {cards}
      </ScrollView> */}
      {/* <View style={[Styles.containerBox, custumStyles]}>
        
        <View style={Styles.cardContainer}>
          
        </View>
      </View> */}
    </View>
  );
}
