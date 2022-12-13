import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../../assets/images';
import {getComponentData} from '../Helper';
import axios from 'axios';
import Card from '../Card';
const width = Dimensions.get('window').width;

export default function TitleCard(props) {
  const {data} = props;
  const [carouselData, setCarouselData] = React.useState([]);
  const getCarauselIds = async () => {
    console.log('data for personal category', data);
    const bannerId = data[0].productCodes;
    const splitBannerId = bannerId.split(' ');
    getCarauselData(splitBannerId);
  };
  const getCarauselData = async bannerId => {
    console.log('personal category', bannerId);
    const params = {
      productCodes: bannerId,
    };
    const response = await axios.post(
      'https://apisap.fabindia.com/occ/v2/fabindiab2c/plpContent/searchProducts?fields=products(name,code,price(FULL),images(FULL),totalDiscount,priceAfterDiscount(FULL),newArrival,sale,stock)&lang=en&curr=INR',
      params,
    );
    console.log('response for personal category', response.data.products);
    setCarouselData(response.data.products);
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  const titleCard = item => {
    // console.log('itemitemitemitem', item);
    return (
      // <></>
      <Card {...props} items={item.item} />
      // <View style={Styles.cardContainer}>
      //   <Image source={image.SarisBanner} style={Styles.imgDim} />
      //   <View style={Styles.titleBox}>
      //     <Text style={Styles.title}>Khata Metha Amla Candied -100g</Text>
      //     <Text style={Styles.title}>MRP </Text>
      //   </View>
      // </View>
    );
  };
  return (
    <>
      <FlatList
        horizontal
        style={Styles.cardListContainer}
        showsHorizontalScrollIndicator={false}
        data={carouselData}
        // data={carouselData}
        keyExtractor={(item, index) => index}
        renderItem={titleCard}
      />
    </>
  );
}

const Styles = StyleSheet.create({
  cardListContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imgDim: {
    width: 178,
    height: 226,
  },
  cardContainer: {
    marginRight: 10,
  },
  titleBox: {
    padding: 5,
    width: 178,
  },
  title: {
    fontSize: 16,
    paddingVertical: 1,
    flexWrap: 'wrap',
  },
});
