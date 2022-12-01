import {View, Text, Image, Dimensions, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';

const width = Dimensions.get('window').width;
export default function SingleBanner({data = {}}) {
  const [bannerData, setBannerData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getBannerIds();
  }, []);
  const getBannerIds = async () => {
    const bannerId = data.banners;
    getBannerData(bannerId);
  };
  const getBannerData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');

    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );

    setBannerData(response.component[0]);
    setIsLoading(true);

    //   setCarouselData(response.component);
  };
  return (
    <>
      {isLoading && (
        <Image
          resizeMode="stretch"
          //   source={image.ArtistImg1}
          source={{
            uri: `https://apisap.fabindia.com/${bannerData.media.mobile.url}`,
          }}
          style={{height: 213, width: width}}
        />
      )}
    </>
  );
}
