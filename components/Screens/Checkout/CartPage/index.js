import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartPage(props) {
  console.log('props in cartpage', props);
  const [cartdetails, setCartDetails] = useState(null);

  useEffect(() => {
    getCartDetails();
  }, [props]);

  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `Bearer Kr88U059DepONJpbaPbBSDg_jeY`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      JSON.stringify(response.data),
    );
    setCartDetails(response.data);
  };
  // return cartdetails?.orderEntries?.length ? (
  //   <CartList
  //     {...props}
  //     cartdetails={cartdetails}
  //     getCartDetails={getCartDetails}
  //   />
  return cartdetails?.entries?.length ? (
    <CartList
      {...props}
      cartdetails={cartdetails}
      getCartDetails={getCartDetails}
    />
  ) : (
    <EmptyCart {...props} />
  );
  // return true ? <CartList {...props} /> :<EmptyCart  />;
}
