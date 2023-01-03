import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Card from '../../../Common/Card';
import {useScrollToTop} from '@react-navigation/native';
import {BaseURL2} from '../../../Common/Helper';

const CardProducts = (props, item, active) => {
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

  const onStart = () => {
    ref.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  useEffect(() => {
    onStart();
  }, [active]);
  return (
    <>
      <ScrollView
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          paddingHorizontal: 15,
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
    </>
  );
};
export default CardProducts;
