import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import imageURL from '../../Common/Helper';
import {Colors} from '../../../assets/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  cartDetail,
  Sharedataadd,
  wishlistDetail,
} from '../../Common/Helper/Redux/actions';
export default function Card1(props) {
  const {
    customViewStyle = {},
    item,
    handleClick = null,
    wishlistproductCode = [],
  } = props;
  const dispatch = useDispatch();
  const {cartReducer} = useSelector(state => state);

  const isAvtive = cartReducer.WishListDetail.wishListData.find(items => {
    return items.code == item.code;
  });

  const discountPrice =
    100 - (item.priceAfterDiscount?.value / item?.price?.value) * 100;
  console.log('discountPrice'.discountPrice);
  // console.log(
  //   'item?????????????????????????????????????????????????????????????????',
  //   typeof discountPrice,
  // );
  // console.log('item', item.name);
  const imageUrl = !!item?.variantOptions
    ? item?.variantOptions[0]?.images[0]?.url
    : item?.images[0].url;

  // console.log('imageUrlimageUrlimageUrl', item?.images[0]?.url);
  const check = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    console.log('token 2348723489 token', token.isCheck);
  };
  useEffect(() => {
    check();
  }, []);
  const getAdd = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    console.log('tokenqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq111', getToken.isCheck);

    if (getToken?.isCheck) {
      console.log('shsihsihshsihhhh');
      // if (item.stock.stockLevelStatus == 'inStock') {
      handleClick(item);
      // } else {
      //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
      // }
    } else {
      console.log('glglglglglltltlhhh');
      Toast.showWithGravity('Please Login First', Toast.LONG, Toast.TOP);
      props.navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
      // props.navigation.navigate('MyAccount', {
      //   screen: 'Login_Register',
      // });
    }
  };

  return (
    <>
      <TouchableOpacity
        style={Styles.cardContainer}
        onPress={() => {
          dispatch(Sharedataadd(item));
          props.navigation.navigate('ProductDetailed', {
            productId: item.code,
            imageUrlCheck: item,
          });
        }}
        activeOpacity={0.9}>
        <ImageBackground
          source={{
            uri: `https://apisap.fabindia.com${imageUrl}`,
          }}
          style={Styles.imagedimension}
          resizeMode="cover">
          <TouchableOpacity
            onPress={() => getAdd(item)}
            style={{
              marginTop: 'auto',
              alignSelf: 'flex-end',
              margin: 5,
              // backgroundColor: 'red',
            }}>
            {isAvtive ? (
              <AntDesign name="heart" size={20} color={Colors.primarycolor} />
            ) : (
              <EvilIcons name="heart" size={25} color={Colors.primarycolor} />
            )}
          </TouchableOpacity>
        </ImageBackground>
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>{item.name}</Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.amounttxt}>{item?.priceAfterDiscount?.formattedValue}</Text>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.priceofftxt}>
              {item?.price?.formattedValue}
            </Text>

            {!!discountPrice && (
              <Text style={Styles.offertxt}>
                {discountPrice?.toFixed(0)}% off
              </Text>
            )}
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

        {/* <Text>{item.variantOptions[0].variantOptionQualifiers[0].value}</Text> */}
      </TouchableOpacity>
    </>
  );
}
