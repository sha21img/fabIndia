import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyGiftCard from './MyGiftCard';
import SendGiftCard from './SendGiftCard';
import AddGiftCard from './AddGiftCard';
import CommonTopTab from '../../../Common/CommonTopTab';
import axios from 'axios';
import { giftCardTabs, giftCardTabs1 } from '../../../../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseURL2, logout } from '../../../Common/Helper';
import { useDispatch } from 'react-redux';

export default function GiftCard(props) {
  const from = props?.route;

  const dispatch = useDispatch();
  const [walletInfo, setWalletInfo] = useState({
    totalBalance: '0.0',
    walletNumber: '0',
  });

  const getWallet = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(
        `${BaseURL2}/users/current/getWallet?lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        if (response && response.status === 200) {
          setWalletInfo(response.data);
        }
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  useEffect(() => {
    getWallet();
  }, []);

  const screenObj = {
    'My Gift Card': () => <MyGiftCard walletInfo={walletInfo} {...props} />,
    'Add Gift Card': () => <AddGiftCard walletInfo={walletInfo} {...props} />,
    'Send Gift Card': () => <SendGiftCard walletInfo={walletInfo} {...props} />,
  };

  const dataMap = giftCardTabs.map(item => ({
    title: item,
    card: screenObj[item],
  }));

  const screenObj1 = {
    'Send Gift Card': () => <SendGiftCard walletInfo={walletInfo} {...props} />,
  };

  const dataMap1 = giftCardTabs1.map(item => ({
    title: item,
    card: screenObj1[item],
  }));

  const checkData = () => {
    if (from?.params?.from == 'Menu') {
      return dataMap1;
    } else {
      return dataMap;
    }
  };

  return (
    <>
      <CommonTopTab data={checkData()} />
    </>
  );
}
