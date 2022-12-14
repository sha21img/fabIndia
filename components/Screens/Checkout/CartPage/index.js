import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CartPage(props) {
  const [cartdetails, setCartDetails] = useState(null);

  useEffect(() => {
    getCartDetails();
  }, [props]);

  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log("valuevaluevaluevaluevaluevaluevaluevaluevaluevalue",value)
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08336188/entries?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `Bearer Kr88U059DepONJpbaPbBSDg_jeY`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      response.data,
    );
    setCartDetails(response.data);
  };
  return cartdetails?.orderEntries?.length ? (
    <CartList {...props} cartdetails={cartdetails} getCartDetails={getCartDetails} />
  ) : (
    <EmptyCart />
  );
  // return true ? <CartList {...props} /> :<EmptyCart  />;
}
