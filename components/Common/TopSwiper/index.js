import {View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';
import axios from 'axios';
import {getComponentData, imageURL} from '../Helper';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TopSwiper(props) {
  const navigation = useNavigation();
  const {customStyle = {}, data = {}} = props;
  // console.log('thisthishtishtishs TopSwiper', data);
  const [carouselData, setCarouselData] = React.useState([]);

  const getCarauselIds = async () => {
    let images = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      images.push(item.image);
    }
    setCarouselData(images);
  };
  useEffect(() => {
    if (props?.data?.length) {
      getCarauselIds();
    }
  }, [props.data]);
  return (
    <View style={customStyle}>
      <SliderBox
        onCurrentImagePressed={curr => {
          const filteredObj = data.find((item, index) => {
            return curr == index;
          });
          const newCode = filteredObj.landingPage;
          let splitURL = newCode.split('/');
          splitURL = splitURL[splitURL.length - 1];
          navigation.navigate('LandingPageSaris_Blouses', {
            code: splitURL,
            title: splitURL,
            status: false,
          });
        }}
        circleLoop={true}
        sliderBoxHeight={212}
        images={carouselData}
        inactiveDotColor="#F3ECE8"
        dotColor={Colors.primarycolor}
      />
    </View>
  );
}
