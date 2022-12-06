import {View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';
import axios from 'axios';
import {getComponentData, imageURL} from '../Helper';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';

export default function TopSwiper(props) {
  const navigation = useNavigation();
  const {customStyle = {}, data = {}} = props;
  const [carouselData, setCarouselData] = React.useState([]);
  const getCarauselIds = async () => {
    const bannerId = data.banners;
    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setCarouselData(response.component);
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  const swiperItems = carouselData?.map((item, i) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('LandingPageSaris_Blouses', {
            code: 'women-saris-blouses',
          })
        }>
        <Image
          onPress={() => console.log('JIJIJ')}
          key={i}
          style={Styles.image}
          source={{
            uri: `https://apisap.fabindia.com/${item.media.mobile.url}`,
          }}
        />
      </TouchableOpacity>
    );
  });

  return (
    <View style={[customStyle, {paddingBottom: 25}]}>
      <Swiper
        pagingEnabled={true}
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        height={212}
        dot={
          <View
            style={{
              backgroundColor: '#F3ECE8',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: -80,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: Colors.primarycolor,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: -80,
            }}
          />
        }
        showsButtons={false}>
        {swiperItems}
      </Swiper>
    </View>
  );
}
