import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../../../../Common/Helper';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';

const Occasion = props => {
  const {data, isSap = false} = props;
  console.log('this sis data', data);
  // const [page, setPage] = useState(0);
  // const [cardData, setCardData] = useState([]);
  // const getOccasionData = async () => {
  //   const splitBannerId = data.banners.split(' ');
  //   console.log('newSplitId11', splitBannerId);
  //   const response = await getComponentData(
  //     `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
  //   );
  //   console.log('response for ocassion card data', response);
  //   if (cardData.length) {
  //     setCardData(prev => [...cardData, ...response.component]);
  //   } else {
  //     setCardData(response.component);
  //   }
  // };
  // useEffect(() => {
  //   getOccasionData();
  // }, []);
  // const endReach = () => {
  //   if (cardData?.pagination?.totalPages > page) {
  //     setPage(page + 1);

  //     // getBannerIds();
  //   }
  // };
  const catagory = item => {
    console.log('item for ocasssion card data', item.item);
    const newCode = item.item.landingPage;

    return (
      <View style={{flexDirection: 'column', marginRight: 10}}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: newCode,
              title: item.item.title,
              isAdmin2: 'isAdmin2',
            });
          }}>
          <Image
            source={{
              uri: isSap ? item?.item?.image : item?.item?.image?.split('?')[0],
            }}
            style={{height: 282, width: 220}}
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingVertical: 10,
            fontFamily: Fonts.Assistant600,
            color: Colors.textcolor,
            fontSize: 16,
          }}>
          {item.item.title.toUpperCase()}
        </Text>
      </View>
    );
  };
  return (
    <>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 7,
        }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={catagory}
        // contentContainerStyle={{width: width}}
      />
    </>
  );
};

export default Occasion;
