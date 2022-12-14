import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';
import axios from 'axios';

export default function OrderStatus(props) {
  const [orderDetails,setOrderDetails] = useState(null)
  console.log('route', props.route.params.screen);
  const {screen , orderID} = props.route.params;
console.log("orderIDorderIDorderIDorderIDorderID",orderID)
  useEffect(()=>{
getorderDetails()
  },[])

  const getorderDetails = async() =>{
    const response = await axios.get(
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/${orderID}?fields=DEFAULT`,
      {
        headers: {
          Authorization: `Bearer w8d9P7MvO0KxVoW2m8XVI8Xf4oM`,
        },
      },
    );
 console.log("setOrderDetailssetOrderDetailssetOrderDetailssetOrderDetailsashishhhhhhhhhhhh89555555555",response?.data?.entries[0]?.status?.name)
    setOrderDetails(response.data)
  }

  return (
    <OrderInProgress  orderDetails={orderDetails} getorderDetails={getorderDetails}/>
    // <OrderCancelled  orderDetails={orderDetails}/>

  )
  // return screenName === 'In progress' ? (
  //   <OrderInProgress />
  // ) : screenName === 'Delivered' ? (
  //   <OrderDelivered {...props} />
  // ) : (
  //   <OrderCancelled />
  // );
}
