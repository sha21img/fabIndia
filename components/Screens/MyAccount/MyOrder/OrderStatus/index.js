import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OrderStatus(props) {
  const [orderDetails, setOrderDetails] = useState(null);
  console.log('route', props.route.params.screen);
  const {screen, orderID} = props.route.params;
  console.log('orderIDorderIDorderIDorderIDorderID', orderID);
  useEffect(() => {
    getorderDetails();
  }, [props]);

  const getorderDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios.get(
      // 'https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/08045005?fields=FULL&lang=en&curr=INR'
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/${orderID}?fields=FULL`,
      {
        headers: {
          Authorization: `bearer s4UIf4QpPjxuq9t3T6QcMwZwgoM`,
        },
      },
    );
    console.log(
      'setOrderDetailssetOrderDetailssetOrderDetailssetOrderDetailsashishhhhhhhhhhhh89555555555',
      response?.data,
    );
    setOrderDetails(response.data);
  };

  return (
    <OrderInProgress
      orderDetails={orderDetails}
      getorderDetails={getorderDetails}
    />
    // <OrderCancelled  orderDetails={orderDetails}/>
  );
  // return screenName === 'In progress' ? (
  //   <OrderInProgress />
  // ) : screenName === 'Delivered' ? (
  //   <OrderDelivered {...props} />
  // ) : (
  //   <OrderCancelled />
  // );
}
