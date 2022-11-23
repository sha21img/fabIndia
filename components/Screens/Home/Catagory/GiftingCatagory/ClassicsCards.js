import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
import {getComponentData} from '../../../../Common/Helper';
import Card from '../../../../Common/Card';
import Card1 from '../../../../Common/Card1';
const width = Dimensions.get('window').width;

export default function ClassicsCards({data, customStyles}) {
  const [carouselData, setCarouselData] = React.useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(0);
  const getCarauselIds = async () => {
    const bannerId = data.productCodes;
    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('response.sata', response);
    // setPage(page + 1);
    // setDataArray(response);
    // if (carouselData.length) {
    //   setCarouselData(prev => [...prev, ...response.component]);
    // } else {
    //   setCarouselData(response.component);
    // }
    // setCarouselData(response.component);
  };
  const imageCard = item => {
    return (
      <Card
        customViewStyle={{marginRight: 15}}
        originalprice="1,000"
        offer="20"
      />
    );
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  const endReach = () => {
    if (dataArray?.pagination?.totalPages > page) {
      getNewHighlightIds();
    }
  };
  return (
    <View style={customStyles}>
      <Text style={Styles.heading}>{data.giftHeading}</Text>
      <View style={{paddingHorizontal: 15}}>
        <FlatList
          horizontal
          data={[0, 0, 0]}
          onEndReached={endReach}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index}
          renderItem={imageCard}
        />
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 30,
  },
});
