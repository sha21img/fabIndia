import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import axios from 'axios';
import Card from '../../../Common/Card';

const CardProducts = (props, item) => {
  const [productData, setproductData] = React.useState([]);

  const newData = props.data;
  const getProductCodes = data => {
    // console.log('data', data.productCodes);
    return data.productCodes;
  };
  const getproductData = async productCodes => {
    // console.log(
    //   'props for top tabs--------------------------------------------------------............................................................................................................',
    //   productCodes,
    // );
    const params = {
      productCodes: productCodes,
    };
    const response = await axios.post(
      'https://apisap.fabindia.com/occ/v2/fabindiab2c/plpContent/searchProducts?fields=products(name,code,price(FULL),images(FULL),totalDiscount,priceAfterDiscount(FULL),newArrival,sale,stock)&lang=en&curr=INR',
      params,
    );
    // console.log(
    //   'response.data]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]',
    //   response.data.products,
    // );
    setproductData(response.data.products);
  };
  React.useEffect(() => {
    const productCodes = item.productCodes.split(' ');
    // const a = newData;

    // const loopData = newData.forEach(item => {
    //   const productCodes = getProductCodes(item);
    //   // console.log('productCodes', productCodes);
    // });
    getproductData(productCodes);
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
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
      {/* <Card {...props} />
        <Card {...props} /> */}
    </ScrollView>
  );
};
export default CardProducts;
