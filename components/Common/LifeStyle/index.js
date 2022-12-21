import react from 'react';
import {
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';

export default function LifeStyle(props) {
  const {
    data = {},
    title = null,
    backgroundColor = '',
    customViewStyle = {},
  } = props;
  const [categoryData, setCategoryData] = React.useState([]);
  const [page, setPage] = useState(0);
  const [array, setArray] = useState([]);

  const getBannerIds = async () => {
    const bannerId = data.banners;
    const splitBannerId = bannerId.split(' ').join(',');
    console.log('splitBannerId', splitBannerId);
    getCategoryData(splitBannerId);
  };
  const getCategoryData = async bannerId => {
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${bannerId}&lang=en&curr=INR`,
    );
    console.log(
      'responsesdfghjhgfdsaf1111111111111111111111111111111response',
      response.component[0].media.url,
    );

    setPage(page + 1);
    setCategoryData(response);
    if (array.length > 0) {
      setArray(prev => [...prev, ...response.component]);
    } else {
      setArray(response.component);
    }
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
    const newCode = item.urlLink;
    // console.log('item for product', newCode);
    let splitURL = newCode.split('/');
    splitURL = splitURL[splitURL.length - 1];
    console.log('splitURL', splitURL);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: splitURL,
            title: item.title,
          })
        }>
        <ImageBackground
          key={Math.random() * 1099900}
          resizeMode="cover"
          source={{
            uri: `https://apisap.fabindia.com/${item.media.url}`,
          }}
          style={[
            Styles.card,
            {
              marginTop: index % 2 != 0 ? 30 : 10,
              height: 250,
            },
          ]}>
          {/* <LinearGradient
          colors={['transparent', '#66553B']}
          style={Styles.cardBox}>
          <Text style={Styles.boxText}>{item.title}</Text>
        </LinearGradient> */}
        </ImageBackground>
      </TouchableOpacity>
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
            fontFamily: Fonts.PlayfairDisplay600Italic,
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
        renderItem={({item, index}) => cards(item, index)}
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
