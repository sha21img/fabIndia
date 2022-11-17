import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function OrderProductCard({
  image = '',
  title = '',
  size = '',
  quantity = '',
  price = '',
}) {
  return (
    <View style={Styles.product}>
      <View style={{width: '25%'}}>
        <Image
          style={Styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.txt}>{title}</Text>
        {/* <Text style={Styles.txt}>Product Name</Text> */}
        <Text style={Styles.txt}>
          Size:<Text style={Styles.bold}>{size}</Text>
          <Text style={Styles.txt}> Qty</Text>
          <Text style={Styles.bold}> {quantity} </Text>
        </Text>
        <Text style={Styles.price}> ₹ {price}</Text>
      </View>
    </View>
  );
}
