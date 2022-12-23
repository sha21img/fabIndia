import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';

export default function CategoryGrid({data = {}}) {
  console.log('datadata', data);
  const getBannerData = async () => {
    const bannerId = data.bannerCarouselColumns;
    const splitBannerId = bannerId.split(' ').join(',');

    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('responsepoiuyt', response);

    // setBannerData(response.component[0]);
    // setIsLoading(true);

    //   setCarouselData(response.component);
  };
  useEffect(() => {
    getBannerData();
  }, []);
  return (
    <>
      <Text>oihu</Text>
    </>
  );
}
