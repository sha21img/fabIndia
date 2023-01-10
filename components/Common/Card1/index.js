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
    code = '',
  } = props;
  const [sizeCode, setSizeCode] = React.useState({
    value: '',
    color: '',
    code: '',
  });
  const dispatch = useDispatch();
  const {cartReducer} = useSelector(state => state);

  const filterSize =
    item?.variantOptions &&
    item.variantOptions.map(item => {
      return {
        value: item.variantOptionQualifiers[0].value,
        color: item.variantOptionQualifiers[1].value,
        code: item.code,
      };
    });
  useEffect(() => {
    if (!!filterSize) {
      if (filterSize.length == 1) {
        setSizeCode({
          value: filterSize[0].value,
          color: filterSize[0].color,
          code: filterSize[0].code,
        });
      }
    } else {
      setSizeCode({...sizeCode, code: item.code});
    }
  }, []);

  const isAvtive = cartReducer?.WishListDetail?.wishListData.find(items => {
    // if (filterSize) {
    // if (filterSize.length) {
    // }
    return items.code == sizeCode.code;
    // } else {
    //   return items.code == item.code;
    // }
    // if (filterSize[0].value == 'Free Size') {
    //   return items.code == item.code;
    // } else {
    //   return items.code == sizeCode.code;
    // }
  });

  const discountPrice =
    100 - (item.priceAfterDiscount?.value / item?.price?.value) * 100;
  const imageUrl = !!item?.variantOptions
    ? item?.variantOptions[0]?.images[0]?.url
    : item?.images[0].url;

  const getAdd = async data => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (sizeCode.code != '') {
      if (getToken?.isCheck) {
        handleClick(sizeCode);
      } else {
        Toast.showWithGravity('Please Select Size', Toast.LONG, Toast.TOP);
      }
      // } else {
      //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
      // }
    } else {
      Toast.showWithGravity('Please Login First', Toast.LONG, Toast.TOP);
      props.navigation.navigate('Login_Register', {
        From: 'PLP',
        productCode: sizeCode.code,
        code: code,
        sizeCode: sizeCode,
      });
      // props.navigation.navigate('Login_Register');
    }
  };

  return (
    <>
      <TouchableOpacity
        style={Styles.cardContainer}
        onPress={() => {
          dispatch(Sharedataadd(item));
          props.navigation.navigate('ProductDetailed', {
            productId: sizeCode.code,
            imageUrlCheck: item,
            code: code,
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
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {item.name}
          </Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.amounttxt}>
              {item?.priceAfterDiscount?.formattedValue}
            </Text>
            {item?.totalDiscount?.value ? (
              <Text style={Styles.priceofftxt}>
                {item?.price?.formattedValue}
              </Text>
            ) : null}

            {!!discountPrice && (
              <Text style={Styles.offertxt}>
                {discountPrice?.toFixed(0)}% off
              </Text>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginVertical: 5,
            }}>
            {filterSize &&
              filterSize?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSizeCode(item);
                    }}
                    style={{
                      borderWidth: 0.5,
                      marginRight: 3,
                      padding: 3,
                      minWidth: 20,
                      alignItems: 'center',
                      margin: 2,
                      borderColor:
                        sizeCode?.code == item?.code
                          ? Colors.primarycolor
                          : '#d8dadc',
                      // backgroundColor:
                      //   sizeCode?.code == item?.code ? 'red' : '#fff',
                    }}>
                    <Text style={{fontSize: 12, color: Colors.textcolor}}>
                      {item.value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
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
