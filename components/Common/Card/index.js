import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Styles } from './styles';
import FastImage from 'react-native-fast-image'

export default function Card(props) {
  const {
    customViewStyle = {},
    items
  } = props;

  const defaultViewCustomStyles = {
    width: 192,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    marginBottom: 1,
  };

  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() =>
          props.navigation.navigate('ProductDetailed', {
            productId: items.code,
            imageUrlCheck: items,
          })
        }
        activeOpacity={0.8}>

        <FastImage
          style={{ height: 243, width: 192 }}
          source={{
            uri: `https://apisap.fabindia.com${items?.images[0]?.url}`,
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
