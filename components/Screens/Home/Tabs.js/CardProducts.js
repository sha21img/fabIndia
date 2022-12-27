import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import axios from 'axios';
import Card from '../../../Common/Card';
import {useScrollToTop} from '@react-navigation/native';
import { BaseURL2 } from '../../../Common/Helper';

const CardProducts = (props, item) => {
  const [productData, setproductData] = React.useState([]);

  const getproductData = async productCodes => {
    const params = {
      productCodes: productCodes,
    };
    const response = await axios.post(
      `${BaseURL2}/plpContent/searchProducts?fields=products(name,code,price(FULL),images(FULL),totalDiscount,priceAfterDiscount(FULL),newArrival,sale,stock)&lang=en&curr=INR`,
      params,
    );
    setproductData(response.data.products);
  };

  React.useEffect(() => {
    const productCodes = item.productCodes.split(' ');
    getproductData(productCodes);
  }, []);
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (
    <ScrollView
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 15,
        // paddingVertical: 5,
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
      }}>
      {productData?.map((items, index) => {
        return (
          <>
            <Card {...props} items={items} />
          </>
        );
      })}
    </ScrollView>
  );
};
export default CardProducts;
