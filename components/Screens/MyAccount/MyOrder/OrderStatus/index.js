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
  }, []);

  const getorderDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/orders/${orderID}?fields=DEFAULT`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        setOrderDetails(response.data);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
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
