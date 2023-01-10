import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Share from 'react-native-share';
import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';
import {BaseURL2, logout} from '../../../Common/Helper';
import {useIsFocused} from '@react-navigation/native';

export default function HomeHeader(props) {
  const focus = useIsFocused();
  const {cartReducer, shareData} = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    isTransparent = false,
    homeheader = false,
    searchVisible = true,
    headertext = '',
    totalCount = null,
    showWishlist = true,
    showCart = true,
    middleHeader = '',
    backArrow = true,
  } = props;

  const [cartdetails, setCartDetails] = useState(null);
  const [wishlistQuantity, setWishlistQuantity] = useState(0);
  const [wishlistproduct, setWishlistproduct] = useState([]);

  console.log(
    'cartReducer.WishListDetail.wishlistQuantitycartReducer.WishListDetail.wishlistQuantity1',
    cartReducer.shareData,
  );
  const isInitialWishlised = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const parseToken = JSON.parse(token);
    if (parseToken.isCheck) {
      getWishListDetail();
    }
  };
  useEffect(() => {
    getCartDetails();
    isInitialWishlised();
  }, [focus]);

  const getWishListDetail = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    console.log('this is gpome header', getWishlistID);
    const aa =
      'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue, value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)';
    const response = await axios
      .get(
        `${BaseURL2}/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832?fields=${aa}&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/?fileds=${aa}?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        if (!!response?.data?.name) {
          if (response?.data?.name?.includes('wishlist')) {
            const filterProductId = response.data.entries.map(item => {
              console.log('item.product.code');
              return {
                code: item.product.baseOptions[0].selected.code,
                item: item,
              };
            });
            dispatch(
              wishlistDetail({
                wishListData: filterProductId,
                wishlistQuantity: response.data.entries.length,
              }),
            );
            // setWishlistproductCode(filterProductId);
          }
        }
      })
      .catch(error => {
        console.log('vicky,getWishlistDetila', error);

        if (error.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';

    console.log('iuytrdfu', getToken);
    console.log('typetype', type);
    console.log('getCartIDgetCartID', getCartID);
    const response = await axios
      .get(
        `${BaseURL2}/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('vicky,carrrraaaaaaaarrrrrrrrrrrr', response.data);

        let finalvalue = response?.data?.deliveryItemsQuantity;
        dispatch(
          cartDetail({cartData: response.data, cartQuantity: finalvalue}),
        );
      })
      .catch(errors => {
        console.log('vicky,carrrrrrrrrrrrrrrr', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const shareAll = () => {
    Share.open({
      message:
        'Check this Out ' +
        `${cartReducer?.shareData?.name} ` +
        `https://www.fabindia.com${cartReducer?.shareData?.url}` +
        ' on Fabindia',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  const isWishlisted = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const parseToken = JSON.parse(token);
    if (parseToken.isCheck) {
      props.navigation.navigate('YourWishlist');
    } else {
      props.navigation.navigate('Login_Register');
    }
  };
  return (
    <>
      <View
        style={[
          Styles.container,
          {backgroundColor: isTransparent ? Colors.TRANSPARENT : 'white'},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {homeheader ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <SimpleLineIcons
                name="menu"
                color={Colors.primarycolor}
                size={20}
                onPress={() => props.navigation.openDrawer()}
              />
              <Image source={image.color_logo} style={Styles.imagestyle} />
            </View>
          ) : (
            <>
              {backArrow ? (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                  }}
                  onPress={() => props.navigation.goBack()}>
                  <SimpleLineIcons
                    name="arrow-left"
                    color={Colors.primarycolor}
                    size={20}
                  />
                </TouchableOpacity>
              ) : null}
              {!!headertext ? (
                <View>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 15,
                      color: Colors.textcolor,
                      fontFamily: Fonts.Assistant500,
                    }}>
                    {headertext}
                  </Text>
                  {!!totalCount && (
                    <Text style={{fontSize: 10}}>{totalCount} items</Text>
                  )}
                </View>
              ) : null}
            </>
          )}
        </View>
        {!!middleHeader && (
          <Text
            style={{
              color: Colors.primarycolor,
              fontSize: 18,
              fontFamily: Fonts.PlayfairDisplay500,
            }}>
            {middleHeader}
          </Text>
        )}

        <View style={Styles.detailContainer}>
          {searchVisible ? (
            <TouchableOpacity
              style={Styles.locationContainer}
              onPress={() => {
                props.navigation.navigate('InitialSearch', {
                  screen: 'Search',
                });
              }}>
              <EvilIcons name="search" color={Colors.primarycolor} size={30} />
            </TouchableOpacity>
          ) : searchVisible == null ? (
            <View></View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              style={Styles.locationContainer}
              onPress={() => {
                shareAll();
              }}>
              <Ionicons
                name="share-social"
                color={Colors.primarycolor}
                size={25}
              />
            </TouchableOpacity>
          )}

          {showWishlist && (
            <TouchableOpacity
              style={Styles.currencyContainer}
              onPress={() => isWishlisted()}>
              <EvilIcons name="heart" color={Colors.primarycolor} size={30} />
              {cartReducer.WishListDetail.wishlistQuantity > 0 ? (
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: Colors.primarycolor,
                    width: 16,
                    height: 16,
                    borderRadius: 15 / 2,
                    right: 0,
                    top: -10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: 8,
                    }}>
                    {cartReducer.WishListDetail.wishlistQuantity}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>
          )}
          {showCart && (
            <TouchableOpacity
              style={Styles.cartContainer}
              onPress={() => {
                props.navigation.navigate('CartPage');
              }}>
              <EvilIcons name="cart" size={30} color={Colors.primarycolor} />
              {cartReducer.CartDetail.cartQuantity > 0 ? (
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: Colors.primarycolor,
                    width: 16,
                    height: 16,
                    borderRadius: 15 / 2,
                    right: 0,
                    top: -10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: 8,
                    }}>
                    {cartReducer.CartDetail.cartQuantity}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}
