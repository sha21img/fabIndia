import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';
import {useFocusEffect} from '@react-navigation/native';
import {BaseURL2, getCartID, logout} from '../../../Common/Helper';

export default function CartPage(props) {
  const {cartReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getCartDetails();
    getWishListDetail();
  }, []);

  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';

    await axios
      .get(
        `${BaseURL2}/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('cartList==>', JSON.stringify(response.data));
        let finalvalue = response?.data?.entries?.reduce(
          (n, {quantity}) => n + quantity,
          0,
        );
        dispatch(
          cartDetail({
            data: response.data,
            quantity: finalvalue,
          }),
        );
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const getWishListDetail = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    await axios
      .get(
        `${BaseURL2}/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('wishListDetail==>', response.data);
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
          }
        }
      })
      .catch(error => {
        console.log('error for get cart detail', error);
        if (error.response.status == 401) {
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
    if (isAddWishlist) {
      await axios
        .delete(
          `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
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
          if (error.response.status == 401) {
            logout(dispatch);
          }
        });
    } else {
      await axios
        .post(
          `${BaseURL2}/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
          {quantity: 1, product: {code: data.product.code}},
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          console.log('response.data add to wishlist', response.data);
          getWishListDetail();
        })
        .catch(error => {
          console.log('error for add wishlist', error);
          if (error.response.status == 401) {
            logout(dispatch);
          }
        });
    }
  };
  const deleteCartDetail = async data => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');

    console.log('getCartIDgetCartID', getCartID);
    await axios
      .delete(
        `${BaseURL2}/users/current/carts/${getCartID}/entries/${data.entryNumber}?lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        getCartDetails();
      })
      .catch(error => {
        console.log('kjihugy', error);
      });
  };

  return cartReducer.CartDetail.cartData.entries.length > 0 ? (
    <CartList
      {...props}
      cartdetails={cartReducer.CartDetail.cartData}
      getCartDetails={getCartDetails}
      handleClick={addWishlist}
      deleteCartDetail={deleteCartDetail}
    />
  ) : (
    <EmptyCart {...props} />
  );
}
