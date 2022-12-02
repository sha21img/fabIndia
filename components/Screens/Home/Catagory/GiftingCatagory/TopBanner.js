import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {image} from '../../../../../assets/images';
import {getComponentData} from '../../../../Common/Helper';

export default function TopBanner({data, customStyles}) {
  console.log('this sissss', data);
  const [carouselData, setCarouselData] = useState([]);

  const getCarauselIds = async () => {
    const bannerId = data.banners;
    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    console.log('asdfasdfasdfs', splitBannerId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setCarouselData(response?.component[0]);
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  return (
    <ImageBackground
      source={{
        uri: `https://apisap.fabindia.com${carouselData?.media?.desktop?.url}`,
      }}
      resizeMode="stretch"
      style={[Styles.imageContainer, customStyles]}></ImageBackground>
  );
}
export const Styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 117,
  },
});
