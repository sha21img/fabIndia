import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../assets/Colors';
import Toast from 'react-native-simple-toast';

import {useSelector, useDispatch} from 'react-redux';
import {
  cartDetail,
  Sharedataadd,
  wishlistDetail,
} from '../Helper/Redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseURL2, logout} from '../Helper';
export default function Card3(props) {
  const {cartReducer} = useSelector(state => state);

  const dispatch = useDispatch();
  const {customViewStyle = {}, item, handleClick = null} = props;
  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };
  const discountPrice =
    100 -
    (item.product.priceAfterDiscount?.value / item?.product.price?.value) * 100;
  React.useEffect(() => {
    getCartDetails();
    getWishListDetail();
  }, []);
  const getWishListDetail = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
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
            Authorization: `${getToken?.token_type} ${getToken?.access_token}`,

            // Authorization: `${getToken.token_type} nCVKPnrYg-ZgHMn0djWh1YSFCX0`,
          },
        },
      )
      .then(response => {
        if (!!response?.data?.name) {
          console.log('thsi sis reapobnse .data', response.data);
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
        console.log('vicky,card3', error);

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
        `${BaseURL2}/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        let finalvalue = response?.data?.entries?.reduce(
          (n, {quantity}) => n + quantity,
          0,
        );
        dispatch(cartDetail({data: response.data, quantity: finalvalue}));
      })
      .catch(errors => {
        console.log('vicky,card3', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const addWishlist = async data => {
    const isAddWishlist = cartReducer.WishListDetail.wishListData.find(
      (item, index) => {
        return item.code == data.product.code;
      },
    );
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    // if (isAddWishlist) {
    const response = await axios
      .delete(
        `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
        // {quantity: 0, product: {code: isAddWishlist.code}},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        Toast.showWithGravity(
          'item removed from wishlist',
          Toast.LONG,
          Toast.TOP,
        );
        getWishListDetail();
      })
      .catch(error => {
        console.log('vicky,card3', error);

        if (error.response.status == 401) {
          logout(dispatch);
        }
      });
    // } else {
    //   const value = await AsyncStorage.getItem('cartID');
    //   await axios
    //     .post(
    //       'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR',
    //       // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
    //       {quantity: 1, product: {code: data.code}},
    //       {
    //         headers: {
    //           Authorization: `bearer 2LUFsc7CwqiHcQ_ni3ak3IPG3as`,
    //         },
    //       },
    //     )
    //     .then(response => {
    //       console.log('response.data add to wishlist', response.data);
    //       getCartDetails();
    //     })
    //     .catch(error => {
    //       console.log('error for add wishlist', error);
    //     });
    // }
  };
  const AddtoCart = async item => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    const response = await axios
      .post(
        `${BaseURL2}/users/${type}/carts/${getCartID}/entries?lang=en&curr=INR`,
        {
          quantity: item.quantity,
          product: {
            code: item.product.code,
          },
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(async response => {
        Toast.showWithGravity(
          'item successfully added to cart',
          Toast.LONG,
          Toast.TOP,
        );
        getCartDetails();
        const responsee = await axios
          .delete(
            `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${item.entryNumber}?lang=en&curr=INR`,
            // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
            // {quantity: 0, product: {code: isAddWishlist.code}},
            {
              headers: {
                Authorization: `${getToken.token_type} ${getToken.access_token}`,
              },
            },
          )
          .then(response => {
            getWishListDetail();
          })
          .catch(errors => {
            console.log('vicky,card3', errors);

            if (errors.response.status == 401) {
              logout(dispatch);
            }
          });
      })
      .catch(errors => {
        Toast.showWithGravity(
          errors?.response?.data?.errors[0]?.message,
          Toast.LONG,
          Toast.TOP,
        );
        if (errors.response.status == 401) {
          console.log('vicky,card3', errors);

          logout(dispatch);
        }
      });
  };
  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <TouchableOpacity
          onPress={() => {
            dispatch(Sharedataadd(item));
            props.navigation.navigate('ProductDetailed', {
              productId: item.product.code,
              imageUrlCheck: item,
            });
          }}>
          <Image
            source={{
              uri: `https://apisap.fabindia.com${item.product.images[0].url}`,
            }}
            style={Styles.imagedimension}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {item.product.name}
          </Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.amounttxt}>
              {item.product.priceAfterDiscount.formattedValue}
            </Text>
            {/* <Text style={Styles.priceofftxt}>
              {item.product.price.formattedValue}
            </Text>
            <Text style={Styles.offertxt}>
              {discountPrice?.toFixed(0)}% off
            </Text> */}
          </View>
        </View>
        <TouchableOpacity
          style={Styles.actions}
          onPress={() => {
            // if (item.product.stock.stockLevelStatus == 'inStock') {
            AddtoCart(item);
            // } else {
            //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
            // }
          }}>
          {/* <Text style={Styles.actionstxt}>Remove</Text>
          <View style={Styles.dash}></View> */}
          <Text style={Styles.actionstxt}>Move to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // if (item.product.stock.stockLevelStatus == 'inStock') {
            //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
            // } else {
            addWishlist(item);
            // }
          }}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            height: 25,
            width: 25,
            borderRadius: 20,
            backgroundColor: '#EDE4E3',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
          }}>
          <EvilIcons name="close" size={15} color="gray" />

          {/* <AntDesign
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
          /> */}
        </TouchableOpacity>
      </View>
    </>
  );
}
