import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';
import {useFocusEffect} from '@react-navigation/native';
import {getCartID, logout} from '../../../Common/Helper';

export default function CartPage(props) {
  const {cartReducer} = useSelector(state => state);
  console.log(
    'cartReducer.WishListDetail.wishListData',
    cartReducer.WishListDetail.wishListData,
  );
  const dispatch = useDispatch();

  console.log('props in cartpage', props);
  const [cartdetails, setCartDetails] = useState(null);

  useEffect(() => {
    getCartDetails();
    getWishListDetail();
  }, []);

  // const getInitialCartID = async () => {
  //   const cartId = await AsyncStorage.getItem('cartID');
  //   console.log('cartId==>', cartId);
  //   cartId == null && getCartID();
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getInitialCartID();
  //   }, []),
  // );

  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    console.log('this us cart id a', getToken);
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
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
        console.log(
          'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
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
        console.log('error for get cart detail', error);
        if (error.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  //
  const addWishlist = async data => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data.product.code);
    const isAddWishlist = cartReducer.WishListDetail.wishListData.find(
      (item, index) => {
        return item.code == data.product.code;
      },
    );
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    console.log('this us cart id c', getToken);
    if (isAddWishlist) {
      console.log(
        'ifffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      );
      const response = await axios
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
          if (error.response.status == 401) {
            logout(dispatch);
          }
        });
    } else {
      console.log(
        'elllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
      );
      const value = await AsyncStorage.getItem('cartID');
      console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
      console.log('addWishlist', data.product.code, getWishlistID);
      const response = await axios
        .post(
          `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
          // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
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
  //
  // return cartdetails?.orderEntries?.length ? (
  //   <CartList
  //     {...props}
  //     cartdetails={cartdetails}
  //     getCartDetails={getCartDetails}
  //   />
  // console.log('CartDetail==>', JSON.stringify(cartdetails))
  return cartReducer.CartDetail.cartData.entries.length > 0 ? (
    <CartList
      {...props}
      cartdetails={cartReducer.CartDetail.cartData}
      getCartDetails={getCartDetails}
      handleClick={addWishlist}
    />
  ) : (
    <EmptyCart {...props} />
  );
  // return true ? <CartList {...props} /> :<EmptyCart  />;
}
