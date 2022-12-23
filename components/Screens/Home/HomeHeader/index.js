import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputText from '../../../Common/InputText';
import debounce from 'lodash.debounce';
import Share from 'react-native-share';
import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';
import {logout} from '../../../Common/Helper';

export default function HomeHeader(props) {
  const [show, setShow] = useState(false);
  const {cartReducer, shareData} = useSelector(state => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {homeheader = false, searchVisible = true} = props;
  const {
    homeheader = false,
    searchVisible = true,
    headertext = '',
    totalCount = null,
  } = props;

  const [cartdetails, setCartDetails] = useState(null);
  const [wishlistQuantity, setWishlistQuantity] = useState(0);
  const [wishlistproduct, setWishlistproduct] = useState([]);

  console.log(
    'cartReducer.WishListDetail.wishlistQuantitycartReducer.WishListDetail.wishlistQuantity1',
    cartReducer.shareData,
  );
  useEffect(() => {
    getCartDetails();
    getWishListDetail();
  }, []);
  const getWishListDetail = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart iooooooooooooooood11', getCartID);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    const aa =
      'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue, value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)';
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
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
              return {
                code: item.product.baseOptions[0].selected.code,
                item: item,
              };
            });
            dispatch(
              wishlistDetail({
                data: filterProductId,
                quantity: response.data.entries.length,
              }),
            );
            // setWishlistproductCode(filterProductId);
          }
        }
      })
      .catch(error => {
        console.log('error for get csrt detail', error);
        if (error.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const type = getToken.isCheck ? 'current' : 'anonymous';
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        let finalvalue = response?.data?.deliveryItemsQuantity;
        dispatch(cartDetail({data: response.data, quantity: finalvalue}));
      })
      .catch(errors => {
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

  return (
    <>
      <View style={Styles.container}>
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
            <View style={{flexDirection: 'column', width: '50%'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.textcolor,
                  fontFamily: Fonts.Assistant500,
                }}>
                {headertext}
              </Text>
              {!!totalCount && (
                <Text style={{fontSize: 10}}>{totalCount}items</Text>
              )}
            </View>
          </>
        )}

        <View style={Styles.detailContainer}>
          {searchVisible ? (
            <TouchableOpacity
              style={Styles.locationContainer}
              onPress={() => {
                console.log('jiji'),
                  props.navigation.navigate('InitialSearch', {
                    screen: 'Search',
                  });
              }}>
              <EvilIcons
                name="search"
                color={Colors.primarycolor}
                size={30}
                // onPress={() => {
                //   setShow(!show);
                // }}
              />
            </TouchableOpacity>
          ) : searchVisible == null ? (
            <View></View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
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
          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
          <TouchableOpacity
            style={Styles.currencyContainer}
            onPress={() => props.navigation.navigate('YourWishlist')}>
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

            {/* <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text> */}
          </TouchableOpacity>
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
        </View>
      </View>
      {/* {show ? (
        <>
          <View
            style={{
              position: 'absolute',
              left: '10%',
              width: '80%',
              zIndex: 999,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 5,
              paddingHorizontal: 20,
              borderRadius: 40,
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Search here..."
                onChangeText={text => setText(text)}
                value={debouncedText}
                style={{
                  width: '95%',
                }}
              />
              <FontAwesome
                name="close"
                color={Colors.primarycolor}
                size={25}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
            {filterProduct.length > 0 ? (
              filterProduct?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('ProductDetailed', {
                        productId: item.code,
                      })
                    }
                    style={{paddingBottom: 10, paddingHorizontal: 15}}>
                    <Text>{item.name}</Text>
                    <Text>{item.price.formattedValue}</Text>
                  </TouchableOpacity>
                );
              })
            ) : filterProduct.length ? (
              <Text>No Product Found</Text>
            ) : null}
          </View>
        </>
      ) : null} */}
    </>
  );
}
{
  /* <View style={Styles.container}>
<View style={Styles.logoBox}>
  <Image source={image.color_logo} style={Styles.logo} />
</View>
<View style={Styles.detailContainer}>
  <TouchableOpacity style={Styles.locationContainer}>
    <Ionicons name="location-sharp" color={'#792C27'} size={20} />
    <Text numberOfLines={1} style={Styles.locationText}>
      Powai, Mumbai
    </Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.currencyContainer}>
    <Text style={Styles.currencyIcon}>₹</Text>
    <Text style={Styles.currencyText}>INR</Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.cartContainer}>
    <AntDesign name="shoppingcart" size={24} color={'#792C27'} />
  </TouchableOpacity>
</View>
</View> */
}
