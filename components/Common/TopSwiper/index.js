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
  console.log('thisthishtishtishs TopSwiper', data);
  const [carouselData, setCarouselData] = React.useState([]);
  // const [filterCarouselData, setFilterCarouselData] = React.useState([]);
  const getCarauselIds = async () => {
    // const bannerId = data.banners;
    // getCarauselData(bannerId);
    // getCarauselData();
  // };
  // let code;
  // const getCarauselData = async bannerId => {
    // const splitBannerId = bannerId.split(' ').join(',');
    // const response = await getComponentData(
    //   `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    // );
    // setFilterCarouselData(response.component);
    let images = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      console.log('check all images', item.image);
      images.push(item.image);
    }
    setCarouselData(images);
    console.log("all images", images)
  };
  const isLogedIn = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (!getToken.isCheck) {
      props.navigation.navigate('Login_Register');
    }
  };
  useEffect(() => {
    if(props?.data?.length){
      getCarauselIds();
    }
  }, [props.data]);
  // const swiperItems = carouselData?.map((item, i) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() =>
  //         navigation.navigate('LandingPageSaris_Blouses', {
  //           code: 'women-saris-blouses',
  //         })
  //       }>
  //       <Image
  //         onPress={() => console.log('JIJIJ')}
  //         key={i}
  //         style={Styles.image}
  //         source={{
  //           uri: `https://apisap.fabindia.com/${item.media.mobile.url}`,
  //         }}
  //       />
  //     </TouchableOpacity>
  //   );
  // });

  return (
    <View style={customStyle}>
      <SliderBox
        onCurrentImagePressed={curr => {
          const filteredObj = data.find((item, index) => {
            return curr == index;
          });
          // const newCode = '/shop/sale-home-living';
          const newCode = filteredObj.landingPage;
          console.log('newCodnewCodenewCodee', newCode);
          let splitURL = newCode.split('/');

          splitURL = splitURL[splitURL.length - 1];
          let a = splitURL.split('?');
          // console.log('filteredObjfilteredObjfilteredObj', filteredObj);
          const newId = {
            code: a[a.length - 1].includes('query') ? a[1] : a[0],
            status: a[a.length - 1].includes('query'),
            title: filteredObj.title || filteredObj.media.mobile.altText,
          };
          console.log(
            'filteredObj.titlefilteredObj.filteredObj.filteredObj.title',
            newId,
          );

          if (newId.code.includes('register')) {
            isLogedIn();
          } else {
            navigation.navigate('LandingPageSaris_Blouses', newId);
          }
          // let splitURL = newCode.split('/');
          // splitURL = splitURL[splitURL.length - 1];
          // navigation.navigate('LandingPageSaris_Blouses', {
          // code: 'women-saris-blouses',
          //   code: 'sale',
          // });
        }}
        // autoplay={true}
        circleLoop={true}
        sliderBoxHeight={212}
        images={carouselData}
        inactiveDotColor="#F3ECE8"
        dotColor={Colors.primarycolor}
      />

      {/* <Swiper
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
        {carouselData?.map((item, i) => {
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
      </Swiper> */}
    </View>
  );
}
