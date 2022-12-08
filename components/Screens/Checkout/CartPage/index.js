import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CartPage(props) {
  const [cartdetails, setCartDetails] = useState(null);

  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log("valuevaluevaluevaluevaluevaluevaluevaluevaluevalue",value)
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${value}/entries?lang=en&curr=INR`,
      {},
      {
        headers: {
          Authorization: `Bearer deo4mFuPyvLg_84XL2FJfe2tRMg`,
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
    <CartList {...props} cartdetails={cartdetails} />
  ) : (
    <EmptyCart />
  );
  // return true ? <CartList {...props} /> :<EmptyCart  />;
}
