import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL2, logout} from '../../../../Common/Helper';
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
        `${BaseURL2}/users/current/orders/${orderID}?fields=FULL&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            // Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        console.log('poiuytrdfghjk', response.data);
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
    <>
      {!!orderDetails && (
        <OrderInProgress
          orderDetails={orderDetails}
          getorderDetails={getorderDetails}
          {...props}
          orderID={orderID}
        />
      )}
    </>
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
