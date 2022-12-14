import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import imageURL from '../../Common/Helper';
import {Colors} from '../../../assets/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';

export default function Card1(props) {
  const {
    customViewStyle = {},
    item,
    handleClick = null,
    wishlistproductCode = [],
  } = props;
  const {cartReducer} = useSelector(state => state);
  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };
  console.log(
    'item]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]',
    wishlistproductCode,
  );
  const isAvtive = cartReducer.WishListDetail.wishListData.find(items => {
    return items.code == item.code;
  });
  console.log(
    'item?????????????????????????????????????????????????????????????????',
    isAvtive,
  );
  // console.log('item', item.name);
  const imageUrl = !!item?.variantOptions
    ? item?.variantOptions[0]?.images[0]?.url
    : item?.images[0].url;

  // console.log('imageUrlimageUrlimageUrl', item?.images[0]?.url);
  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() =>
          props.navigation.navigate('ProductDetailed', {
            productId: item.code,
          })
        }
        activeOpacity={0.8}>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${imageUrl}`,
          }}
          style={Styles.imagedimension}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {item.name}
          </Text>
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
          onPress={() => {
            if (item.stock.stockLevelStatus == 'inStock') {
              Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
            } else {
              handleClick(item);
            }
          }}
          style={{
            position: 'absolute',
            top: 20,
            right: 10,
          }}>
          {isAvtive ? (
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
          ) : (
            <EvilIcons
              name="heart"
              size={25}
              color={Colors.primarycolor}
              // color={
              //   wishlistproductCode.find(items => {
              //     return items.code == item.code;
              //   })
              //     ? Colors.primarycolor
              //     : Colors.textcolor
              // }
            />
          )}
        </TouchableOpacity>
        {/* <Text>{item.variantOptions[0].variantOptionQualifiers[0].value}</Text> */}
      </TouchableOpacity>
    </>
  );
}
