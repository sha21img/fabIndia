import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';
export default function OrderStatus(props) {
  const dispatch = useDispatch();
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
    console.log('orderID', orderID);

    await axios
      .get(
        `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/${orderID}?fields=FULL&lang=en&curr=INR`,
        {
          headers: {
            // Authorization: `${getToken.token_type} ${getToken.access_token}`,
            Authorization: `${getToken.token_type} WU2ZXu0fztI11ZxgR1AV4Xxs7dQ`,
          },
        },
      )
      .then(response => {
        console.log(response.data, 'for item deliverry');
        setOrderDetails(response.data);
      })
      .catch(errors => {
        console.log('vicky,orderStatus', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  return (
    <OrderInProgress
      orderDetails={orderDetails}
      getorderDetails={getorderDetails}
      {...props}
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
