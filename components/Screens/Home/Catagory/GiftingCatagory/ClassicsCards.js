import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
import {BaseURL2, getComponentData} from '../../../../Common/Helper';
import Card from '../../../../Common/Card';
import Card1 from '../../../../Common/Card1';
import axios from 'axios';
const width = Dimensions.get('window').width;

export default function ClassicsCards(props) {
  const {data, customStyles} = props;
  console.log('response.data]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]', data);
  const [carouselData, setCarouselData] = React.useState([]);
  const [productData, setproductData] = React.useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(0);
  const getCarauselIds = async () => {
    const bannerId = data.productCodes;
    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    // const splitBannerId = bannerId.split(' ').join(',');
    console.log('bannerIdbannerId.sa', bannerId.split(' '));
    const params = {
      productCodes: bannerId.split(' '),
    };
    const response = await axios.post(
      `${BaseURL2}/plpContent/searchProducts?fields=products(name,code,price(FULL),images(FULL),totalDiscount,priceAfterDiscount(FULL),newArrival,sale,stock)&lang=en&curr=INR`,
      params,
    );

    setproductData(response?.data?.products);
    console.log('this is sthe data', response.data);

    // const response = await getComponentData(
    //   `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    // );
    // console.log('response.sata', response);
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
    console.log('item for classic card', item);
    return (
      // <></>
      <Card {...props} items={item.item} />
    );
  };
  useEffect(() => {
    getCarauselIds();
  }, [props.data]);
  const endReach = () => {
    if (dataArray?.pagination?.totalPages > page) {
      getNewHighlightIds();
    }
  };
  return (
    <View style={customStyles}>
      <Text style={Styles.heading}>{data?.giftHeading}</Text>
      <View style={{paddingHorizontal: 15}}>
        <FlatList
          horizontal
          data={productData}
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
