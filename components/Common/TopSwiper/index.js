import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';
import axios from 'axios';
import {getComponentData, imageURL} from '../Helper';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';

export default function TopSwiper({customStyle, data}) {
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
  }, [carouselData]);
  const Page = () => {
    return (
      <>
        {carouselData?.map((item, i) => {
          return (
            <View key={i}>
              <Image
                key={Math.random() * 1099900}
                style={Styles.image}
                source={{
                  uri: `https://apisap.fabindia.com/${item.media.mobile.url}`,
                }}
              />
            </View>
          );
        })}
      </>
    );
  };
  return (
    <View style={[customStyle, {paddingBottom: 25}]}>
      <Swiper
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        height={240}
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
        // nextButton={
        //   <View style={Styles.button}>
        //     <Feather name="chevron-right" style={Styles.btnIcon} />
        //   </View>
        // }
        // prevButton={
        //   <View style={Styles.button}>
        //     <Feather name="chevron-left" style={Styles.btnIcon} />
        //   </View>
        // }
        showsButtons={false}>
        {/* <Page /> */}
        {carouselData?.map((item, i) => {
          return (
            <View key={i}>
              <Image
                key={Math.random() * 1099900}
                style={Styles.image}
                source={{
                  uri: `https://apisap.fabindia.com/${item.media.mobile.url}`,
                }}
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}
