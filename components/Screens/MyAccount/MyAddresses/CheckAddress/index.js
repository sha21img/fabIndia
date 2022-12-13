import React, {useState, useEffect} from 'react';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAddresses from '../index'
import EditAddress from '../EditAddress';

export default function CheckAddress(props) {

  const [checkaddress, setcheckAddress] = useState([]);

  useEffect(() => {
    getCheckAddress();
  }, [props]);
  const getCheckAddress = async() =>{
    const value = await AsyncStorage.getItem('cartID');
    console.log("valuevaluevaluevaluevaluevaluevaluevaluevaluevalue",value)
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/addresses`,
      // {},
      {
        headers: {
          Authorization: `Bearer KEib58GZ2gb1Fxogc-FSSkZ-fqM`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      response.data,
    );
    setcheckAddress(response.data)
  }

 
  return checkaddress?.addresses?.length ? (
    <MyAddresses {...props} checkaddress={checkaddress} getCheckAddress={getCheckAddress} amount ={props?.totalPrice} totalquantity = {props?.totalquantity}/>
  ) : (
    <EditAddress {...props}/>
  );
  // return true ? <CartList {...props} /> :<EmptyCart  />;
}
