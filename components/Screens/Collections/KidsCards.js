import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import KidsNameCard from '../../Common/KidsNameCard';
import {getComponentData} from '../../Common/Helper';

const data = [
  {banner: image.BeautyCarousel, title: 'Girls Apparel'},
  {banner: image.BeautyCarousel, title: 'Boys Apparel'},
  {banner: image.BeautyCarousel, title: 'Infant’s Apparel'},
];
export default function KidsCards(props) {
  const {customStyle, data} = props;
  const [collectionData, setCollectionData] = React.useState([]);
  const [page, setPage] = useState(0);
  const [initialData, setInitialData] = useState([]);

  console.log('data126789', data);
  const getBannerData = async () => {
    const splitBannerId = data.banners.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('response.component', response);

    setPage(page + 1);
    setInitialData(response);
    if (collectionData.length > 0) {
      setCollectionData(prev => [...prev, ...response.component]);
    } else {
      setCollectionData(response.component);
    }
  };
  useEffect(() => {
    getBannerData();
  }, []);
  const endReach = () => {
    if (initialData?.pagination?.totalPages > page) {
      getBannerData();
    }
  };
  return (
    <>
      <View style={[customStyle]}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 25,
            lineHeight: 40,
            paddingHorizontal: 15,
          }}>
          {data.title}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 28,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          {data.headline}
        </Text>
        <FlatList
          contentContainerStyle={{paddingHorizontal: 15}}
          horizontal
          data={collectionData}
          onEndReached={endReach}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <>
                <KidsNameCard width={245} height={180} item={item} {...props} />
              </>
            );
          }}
        />
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexWrap: 'wrap',
          }}>
          {collectionData.length > 0 &&
            collectionData.map(item => {
              return (
                <>
                  <KidsNameCard width={245} height={180} item={item} />
                </>
              );
            })}
        </ScrollView> */}
      </View>
    </>
  );
}
