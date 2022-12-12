import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import imageURL from '../../Common/Helper';
import {Colors} from '../../../assets/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Card1(props) {
  const {customViewStyle = {}, item, handleClick = null} = props;

  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };
  // console.log(
  //   'item]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]',
  //   item,
  // );
  // console.log('item', item.name);
  const imageUrl = !!item?.variantOptions
    ? item?.variantOptions[0]?.images[0]?.url
    : item?.images[0].url;

  console.log('imageUrlimageUrlimageUrl', item?.images[0]?.url);
  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() =>
          props.navigation.navigate('ProductDetailed', {
            productId: item.code,
          })
        }>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${imageUrl}`,
          }}
          style={Styles.imagedimension}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Text style={Styles.headingtxt}>{item.name}</Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.amounttxt}>
              ₹{item?.priceAfterDiscount?.value}
            </Text>
            <Text style={Styles.priceofftxt}>
              {item?.price?.formattedValue}
            </Text>
          </View>
          {/* {!!freeSize && (
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.primarycolor,
                padding: 3,
                alignSelf: 'flex-start',
                borderRadius: 3,
              }}>
              <Text
                style={{
                  color: Colors.textcolor,
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                }}>
                {freeSize}
              </Text>
            </View>
          )} */}
        </View>

        {item.tagName && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#FFFFFF',
              padding: 5,
              top: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: Fonts.Assistant400,
                color: Colors.textcolor,
              }}>
              {item.tagName}
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => handleClick(item)}
          style={{
            position: 'absolute',
            top: 20,
            right: 10,
          }}>
          <EvilIcons name="heart" size={25} color={Colors.primarycolor} />
        </TouchableOpacity>
        {/* <Text>{item.variantOptions[0].variantOptionQualifiers[0].value}</Text> */}
      </TouchableOpacity>
    </>
  );
}
