import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';
import axios from 'axios';

export default function TopSwiper({data = [], customStyle, position}) {
  const [carouselData, setCarouselData] = React.useState([]);
  const getCarauselIds = async () => {
    const filterArray = data.filter(item => {
      return item.position == position;
    });
    const filterSlotId = filterArray[0].components.component[0].uid;
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    );

    console.log('carauselData', response.data.component[0].banners);
    const bannerId = response.data.component[0].banners;

    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    console.log('splitBannerId', splitBannerId);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('bannnerrrrr', response.data.component);
    setCarouselData(response.data.component);
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  return (
    <Swiper
      loop={true}
      autoplay={true}
      autoplayTimeout={5}
      showsPagination={false}
      height={230}
      style={customStyle}
      nextButton={
        <View style={Styles.button}>
          <Feather name="chevron-right" style={Styles.btnIcon} />
        </View>
      }
      prevButton={
        <View style={Styles.button}>
          <Feather name="chevron-left" style={Styles.btnIcon} />
        </View>
      }
      showsButtons={true}>
      {carouselData.map((item, i) => {
        console.log('iteeememme', item);
        return (
          <Image
            key={Math.random() * 1099900}
            style={Styles.image}
            source={{
              uri: `https://apisap.fabindia.com/${item.media.mobile.url}`,
            }}
          />
        );
      })}
    </Swiper>
  );
}
