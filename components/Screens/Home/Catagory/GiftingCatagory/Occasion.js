import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../../../../Common/Helper';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';

const Occasion = props => {
  const {data} = props;
  const [page, setPage] = useState(0);
  const [cardData, setCardData] = useState([]);
  const getOccasionData = async () => {
    const splitBannerId = data.banners.split(' ');
    console.log('newSplitId11', splitBannerId);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('response for ocassion card data', response);
    if (cardData.length) {
      setCardData(prev => [...cardData, ...response.component]);
    } else {
      setCardData(response.component);
    }
  };
  useEffect(() => {
    getOccasionData();
  }, []);
  const endReach = () => {
    if (cardData?.pagination?.totalPages > page) {
      setPage(page + 1);

      // getBannerIds();
    }
  };
  const catagory = item => {
    console.log('item for ocasssion card data', item.item.urlLink);
    const image = 'https://apisap.fabindia.com/' + item.item.media.url;
    const newCode = item.item.urlLink;
    let splitURL = newCode.split('/');
    splitURL = splitURL[splitURL.length - 1].split('?')[1];
    console.log('splitURL', splitURL);

    return (
      <View style={{flexDirection: 'column', marginRight: 10}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: splitURL,
              title: 'Gift Sets',
              status: true,
            });
          }}>
          <Image source={{uri: image}} style={{height: 282, width: 220}} />
        </TouchableOpacity>
        <Text
          style={{
            paddingVertical: 10,
            fontFamily: Fonts.Assistant600,
            color: Colors.textcolor,
            fontSize: 16,
          }}>
          {item.item.name.toUpperCase()}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 30,
          }}>
          Gift by Ocassion
        </Text>
      </View>

      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 7,
        }}
        data={cardData}
        horizontal
        onEndReached={endReach}
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
