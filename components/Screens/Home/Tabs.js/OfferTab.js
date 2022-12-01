import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../../../Common/Helper';
import CommonTopTab from '../../../Common/CommonTopTab';
import {image} from '../../../../assets/images';

export default function OfferTab({data = {}}) {
  const [offerData, setOfferData] = useState([]);
  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    console.log('response', splitBannerId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setOfferData(response.component);
  };
  const getOfferCount = () => {
    const bannerId = data.components;
    getBannerCount(bannerId);
  };
  useEffect(() => {
    getOfferCount();
  }, []);
  const ABC = data => {
    const [bannerData, setBannerData] = useState([]);
    const getBannerData = async () => {
      const splitBannerId = data.banners.split(' ').join(',');
      console.log('splitBannerId', splitBannerId);
      const response = await getComponentData(
        `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
      );
      // console.log('response', response.component);
      setBannerData(response.component);
    };
    useEffect(() => {
      getBannerData();
    }, []);
    return (
      <>
        <FlatList
          horizontal
          // style={Styles.cardListContainer}
          contentContainerStyle={{
            paddingHorizontal: 15,
            backgroundColor: '#FFFFFF',
          }}
          showsHorizontalScrollIndicator={false}
          data={bannerData}
          // data={carouselData}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            console.log('item.media.url', item.media.url);
            return (
              <View
                style={{
                  marginRight: 10,
                }}>
                <Image
                  style={{height: 128, width: 192, resizeMode: 'contain'}}
                  // source={image.ArtistImg1}
                  source={{
                    uri: `https://apisap.fabindia.com/${item.media.url}`,
                  }}
                />
              </View>
            );
          }}
        />
      </>
    );
  };
  const cardsObj = {
    Women: ABC,
    // Men: ABC,
    // Men: ABC,
  };
  return (
    <>
      {offerData.length > 0 && (
        <CommonTopTab
          data={offerData.map(item => ({
            ...item,
            card: cardsObj[item.title],

            // card: cardsObj[item.title],
          }))}
        />
      )}
    </>
    /* offerData.length > 0 && <CommonTopTab data={offerData} /> */
  );
}
