import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyGiftCard from './MyGiftCard';
import SendGiftCard from './SendGiftCard';
import AddGiftCard from './AddGiftCard';
import CommonTopTab from '../../../Common/CommonTopTab';
import axios from 'axios';
import { giftCardTabs } from '../../../../constant';
import Card from '../../../Common/Card';

export default function GiftCard() {

  const [walletInfo, setWalletInfo] = useState({ "totalBalance": "0.0", "walletNumber": "0" });

  const getWallet = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/getWallet?lang=en&curr=INR`,
      {
        headers: {
          Authorization: `Bearer Q7S3XVxcpvLEtJDh1r8sKykMIf4`,
        },
      },
    );
    // console.log('walletInfo==>', JSON.stringify(response.data));
    if (response && response.status === 200) {
      setWalletInfo(response.data)
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
    'My Gift Card': () => <MyGiftCard walletInfo={walletInfo} />,
    'Add Gift Card': () => <AddGiftCard walletInfo={walletInfo} />,
    'Send Gift Card': () => <SendGiftCard walletInfo={walletInfo} />
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
