import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyGiftCard from './MyGiftCard';
import SendGiftCard from './SendGiftCard';
import AddGiftCard from './AddGiftCard';
import CommonTopTab from '../../../Common/CommonTopTab';
import axios from 'axios';
import {giftCardTabs} from '../../../../constant';
import Card from '../../../Common/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GiftCard(props) {
  const [walletInfo, setWalletInfo] = useState({
    totalBalance: '0.0',
    walletNumber: '0',
  });

  const getWallet = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/getWallet?lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    // console.log('walletInfo==>', JSON.stringify(response.data));
    if (response && response.status === 200) {
      setWalletInfo(response.data);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  // 'My Gift Card', 'Add Gift Card', 'Send Gift Card'

  // const SendGiftCard = item => {
  //   return <SendGiftCard walletInfo={walletInfo} />
  // };

  const screenObj = {
    'My Gift Card': () => <MyGiftCard walletInfo={walletInfo} {...props} />,
    'Add Gift Card': () => <AddGiftCard walletInfo={walletInfo} {...props} />,
    'Send Gift Card': () => <SendGiftCard walletInfo={walletInfo} {...props} />,
  };

  const dataMap = giftCardTabs.map(item => ({
    title: item,
    card: screenObj[item],
  }));

  return (
    <>
      <CommonTopTab data={dataMap} />

      {/* <AddGiftCard walletInfo={walletInfo} /> */}
      {/* <SendGiftCard walletInfo={walletInfo} /> */}
      {/* <MyGiftCard walletInfo={walletInfo} /> */}
    </>
  );
}
