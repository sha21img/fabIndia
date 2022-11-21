import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../../../Common/Helper';
import CommonTopTab from '../../../Common/CommonTopTab';

export default function OfferTab({data = {}}) {
  const [offerData, setOfferData] = useState([]);
  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    console.log('response', splitBannerId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('responseresponse', response.component);
    setOfferData(response.component);
    // setChipData(response.component);

    // getTabData(response.component[0]);
    // setCarouselData(response.data.component);
  };
  const getOfferCount = () => {
    const bannerId = data.components;
    console.log('nnjjkjjkj', bannerId);
    getBannerCount(bannerId);
  };
  useEffect(() => {
    getOfferCount();
  }, []);
  return <>{offerData.length > 0 && <CommonTopTab data={offerData} />}</>;
}
