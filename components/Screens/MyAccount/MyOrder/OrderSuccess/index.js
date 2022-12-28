import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Success from '../../../../Common/Success';
import axios from 'axios';
import {BaseURL2, logout} from '../../../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderSuccess(props) {
  const {productId, orderID} = props.route.params;
  console.log('123456789', productId, orderID);
  const [orderDetail, setOrderdetail] = useState({});
  useEffect(() => {
    getorderDetails();
  }, []);

  const getorderDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('getToken.access_token', getToken.access_token);
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
        // setOrderDetails(response.data);
        const filteredArray = response.data.entries.find(item => {
          return item.product.code === productId;
        });
        setOrderdetail(filteredArray);
      })
      .catch(errors => {
        console.log('vicky,orderStatus', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  // const filterOrderDetail = orderDetail.entries.filter(item => {
  //   return;
  // });
  return (
    <Success
      {...props}
      orderDetail={orderDetail}
      title="Return request submitted"
      description="Your package will be picked up by our 
  delivery executive"
      btntxt="Done"
    />
  );
}
