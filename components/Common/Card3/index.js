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
import {cartDetail, wishlistDetail} from '../Helper/Redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function Card3(props) {
  const {cartReducer} = useSelector(state => state);

  const dispatch = useDispatch();
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
  React.useEffect(() => {
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
    await axios
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
        console.log(
          'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsaa',
          response.data,
        );
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
        console.log('error for get crt detail', error);
      });
  };
  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const type = getToken.isCheck ? 'current' : 'anonymous';
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      response.data,
    );
    let finalvalue = response?.data?.entries?.reduce(
      (n, {quantity}) => n + quantity,
      0,
    );

    dispatch(cartDetail({data: response.data, quantity: finalvalue}));
    // console.log('quantityquantity', response.data);
    // setCartDetails(response.data);
    // setTotalquantity(finalvalue);
    // setWishlistQuantity(response.data.entries.length);
    // if (response.data.name.includes('wishlist')) {
    //   const filterProduct = response.data.entries.map(item => {
    //     return {
    //       code: item.product.baseOptions[0].selected.code,
    //       item: item,
    //     };
    //   });
    //   dispatch(
    //     wishlistDetail({
    //       data: filterProduct,
    //       quantity: response.data.entries.length,
    //     }),
    //   );

    //   // console.log('filterProduct', filterProduct);
    //   // setWishlistproduct(filterProduct);
    // }
  };
  const addWishlist = async data => {
    const isAddWishlist = cartReducer.WishListDetail.wishListData.find(
      (item, index) => {
        return item.code == data.product.code;
      },
    );
    console.log('isAddWishlist', isAddWishlist);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    console.log('this us cart id', getWishlistID);
    // if (isAddWishlist) {
    await axios
      .delete(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
        // {quantity: 0, product: {code: isAddWishlist.code}},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log(
          'response.data deletetetetetetettetetet to wishlist',
          response.data,
        );
        getWishListDetail();
      })
      .catch(error => {
        console.log('error for remove000 wishlist', error);
      });
    // } else {
    //   const value = await AsyncStorage.getItem('cartID');
    //   console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    //   console.log('addWishlist', data.code);
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
    console.log('add to cart in wihslist page', item.product.code);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    console.log('this -s=df-=sdf-=sd-f=ds-f=-', getToken);
    console.log('this -s=df-=sdf-=sd-f=ds-f=-', getCartID);
    console.log('thistypetype', type);
    await axios
      .post(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}/entries?lang=en&curr=INR`,
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
        getCartDetails();

        // console.log('responssseitemitemitem', item.entryNumber);
        // const entryNumber = response.data.entry.entryNumber;
        // console.log(
        //   'entryNumberentryNumberentryNumberentryNumber',
        //   entryNumber,
        // );
        // console.log('getWishlistIDgetWishlistIDgetWishlistID', getWishlistID);
        // console.log(
        //   'getToken.access_tokengetToken.access_tokengetToken.access_token',
        //   getToken.access_token,
        // );

        await axios
          .delete(
            `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries/${item.entryNumber}?lang=en&curr=INR`,
            // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
            // {quantity: 0, product: {code: isAddWishlist.code}},
            {
              headers: {
                Authorization: `${getToken.token_type} ${getToken.access_token}`,
              },
            },
          )
          .then(response => {
            console.log(
              'response.data deletetetetetetettetetet ssssto wishlist',
              response.data,
            );
            getWishListDetail();
          });
      })
      .catch(error => {
        console.log(
          'add to cart )))))))))))))))))))))))))))))))))))))))))))))))))',
          error,
        );
      });
  };
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
          onPress={() => AddtoCart(item)}>
          {/* <Text style={Styles.actionstxt}>Remove</Text>
          <View style={Styles.dash}></View> */}
          <Text style={Styles.actionstxt}>Add to cart</Text>
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
