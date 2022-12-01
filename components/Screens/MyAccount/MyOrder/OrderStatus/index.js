import {View, Text} from 'react-native';
import React from 'react';
import OrderInProgress from '../OrderInProgress';
import OrderDelivered from '../OrderDelivered';
import OrderCancelled from '../OrderCancelled';

export default function OrderStatus(props) {
  console.log('route', props.route.params.screen);
  const screenName = props.route.params.screen;
  return screenName === 'In progress' ? (
    <OrderInProgress />
  ) : screenName === 'Delivered' ? (
    <OrderDelivered {...props} />
  ) : (
    <OrderCancelled />
  );
}
