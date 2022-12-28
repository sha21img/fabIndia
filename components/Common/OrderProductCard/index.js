import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function OrderProductCard(props) {
  const {data = {}} = props;
  console.log('productproduct', data);
  return (
    <View style={Styles.product}>
      <View style={{width: '25%'}}>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${data?.product.images[0]?.url}`,
          }}
          // source={{uri: item.images[0].url}}
          style={{height: 80, width: 80}}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.txt}>{data?.product?.name}</Text>
        {/* <Text style={Styles.txt}>Product Name</Text> */}
        <Text style={Styles.txt}>
          Size:
          <Text style={Styles.bold}>
            {
              data?.product?.baseOptions[0]?.selected
                ?.variantOptionQualifiers[1].value
            }
          </Text>
          <Text style={Styles.txt}> Qty</Text>
          <Text style={Styles.bold}> {data?.quantity} </Text>
        </Text>
        <Text style={Styles.price}> ₹ 0</Text>
      </View>
    </View>
  );
}
