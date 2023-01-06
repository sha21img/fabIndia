import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Card4(props) {
  const {
    customViewStyle = {},
    items,
    originalprice = null,
    offer = null,
  } = props;

  // console.log(
  //   'items wwwwwwwwwwwwwwwwwwwwwwwoooooooooooooooooooooommmmmmmmmmmmmmmmeeeeeeeeeeeeeeeeennnnnnnnnnnnn',
  //   items.code,
  // );
  const discountPrice =
    100 - (items.priceAfterDiscount?.value / items?.price?.value) * 100;
  // console.log('discountPrice', discountPrice);
  const defaultViewCustomStyles = {
    width: 192,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginRight: 13,
    marginBottom: 1,
  };

  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() =>
          props.navigation.push('ProductDetailed', {
            productId: items.code,
            imageUrlCheck: items,
          })
        }
        activeOpacity={0.9}>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${items?.images[0]?.url}`,
          }}
          // source={{uri: item.images[0].url}}
          style={{height: 243, width: 192}}
          resizeMode="contain"
        />
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {items.name}
          </Text>
          <View style={Styles.amountbox}>
            <Text style={Styles.amounttxt}>
              M.R.P. {items?.price?.formattedValue}
            </Text>
            {discountPrice !== 0 && (
              <Text
                styles={{
                  paddingHorizontal: 10,
                  fontFamily: Fonts.Assistant700,
                  color: '#96ad66',
                  fontSize: 12,
                }}>
                {discountPrice} %off
              </Text>
            )}
            {/* <Text style={Styles.amountoff}>
              {originalprice ? `₹${originalprice}` : null}
            </Text>
            <Text style={Styles.offertxt}>
              {offer ? `${offer}% off` : null}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
