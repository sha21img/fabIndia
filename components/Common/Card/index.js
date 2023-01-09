import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Styles } from './styles';
import FastImage from 'react-native-fast-image'
import { imageURL } from '../Helper';

export default function Card(props) {
  const {
    customViewStyle = {},
    items
  } = props;
  console.log("this sis card data feom anyhere", items)

  return (
    <>
      <TouchableOpacity
        key={items.code}
        style={[Styles.cardContainer, customViewStyle]}
        onPress={() =>
          props.navigation.navigate('ProductDetailed', {
            productId: items.code,
            imageUrlCheck: items,
          })
        }
        activeOpacity={0.9}>

        <FastImage
          style={{ height: 243, width: 192 }}
          source={{
            uri: `${imageURL + items?.images[0]?.url}`,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {items.name}
          </Text>
          <View style={Styles.amountbox}>
            <Text style={Styles.amounttxt}>
              M.R.P. {items?.price?.formattedValue}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
