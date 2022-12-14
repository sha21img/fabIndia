import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../assets/Colors';
import Toast from 'react-native-simple-toast';

export default function Card3(props) {
  const {customViewStyle = {}, item, handleClick = null} = props;
  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };
  console.log('default....................................', item);
  const discountPrice =
    100 -
    (item.product.priceAfterDiscount?.value / item?.product.price?.value) * 100;
  console.log('discountPrice', discountPrice);
  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${item.product.images[0].url}`,
          }}
          style={Styles.imagedimension}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {item.product.name}
          </Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.amounttxt}>
              {item.product.priceAfterDiscount.formattedValue}
            </Text>
            <Text style={Styles.priceofftxt}>
              {item.product.price.formattedValue}
            </Text>
            <Text style={Styles.offertxt}>
              {discountPrice?.toFixed(0)}% off
            </Text>
          </View>
        </View>
        <View style={Styles.actions}>
          <Text style={Styles.actionstxt}>Remove</Text>
          <View style={Styles.dash}></View>
          <Text style={Styles.actionstxt}>Add to cart</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // if (item.product.stock.stockLevelStatus == 'inStock') {
            //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
            // } else {
            handleClick(item);
            // }
          }}
          style={{
            position: 'absolute',
            top: 20,
            right: 10,
          }}>
          <AntDesign
            name="heart"
            size={20}
            color={Colors.primarycolor}
            // color={
            //   wishlistproductCode.find(items => {
            //     return items.code == item.code;
            //   })
            //     ? Colors.primarycolor
            //     : Colors.textcolor
            // }
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
