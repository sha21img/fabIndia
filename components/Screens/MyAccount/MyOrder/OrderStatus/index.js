import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';
import axios from 'axios';

export default function OrderStatus(props) {
  const [orderDetails,setOrderDetails] = useState(null)
  console.log('route', props.route.params.screen);
  const screenName = props.route.params.screen;

  useEffect(()=>{
getorderDetails()
  },[])

  const getorderDetails = async() =>{
    const response = await axios.get(
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/07988005?fields=DEFAULT`,
      {
        headers: {
          Authorization: `Bearer BgbHv0oLxnQtxhw3cxbphBb0FRc`,
        },
      },
    );
 
    setOrderDetails(response.data)
  }

  return (
    <OrderInProgress  orderDetails={orderDetails}/>
  )
  // return screenName === 'In progress' ? (
  //   <OrderInProgress />
  // ) : screenName === 'Delivered' ? (
  //   <OrderDelivered {...props} />
  // ) : (
  //   <OrderCancelled />
  // );
}
