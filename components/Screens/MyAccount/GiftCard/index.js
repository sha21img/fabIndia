import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyGiftCard from './MyGiftCard';
import SendGiftCard from './SendGiftCard';
import AddGiftCard from './AddGiftCard';
import axios from 'axios';
import { giftCardTabs } from '../../../../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseURL2, logout } from '../../../Common/Helper';
import { useDispatch } from 'react-redux';
import { Colors } from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export default function GiftCard(props) {
  const from = props?.route;
  const [selectedTab, setSelectedTab] = useState('My Gift Card');
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

  return (
    <>
      {/* {from?.params?.from != 'Menu' ? */}
      <View style={{ paddingHorizontal: 5, flexDirection: 'row', backgroundColor: Colors.WHITE }}>
        {giftCardTabs.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedTab(item)}
              style={{
                marginLeft: 10, borderBottomWidth: 2, paddingVertical: 3,
                borderBottomColor: selectedTab == item ? Colors.primarycolor : 'transparent'
              }}>
              <Text
                style={{
                  fontSize: 16, fontFamily: Fonts.Assistant300,
                  color: selectedTab == item ? Colors.primarycolor : Colors.textcolor
                }}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* : null
      } */}
      {/* {from?.params?.from != 'Menu' ? */}
      {selectedTab == 'My Gift Card' ? (
        <MyGiftCard walletInfo={walletInfo} {...props} />
      ) : selectedTab == 'Add Gift Card' ? (
        <AddGiftCard walletInfo={walletInfo} {...props} />
      ) : (
        <SendGiftCard walletInfo={walletInfo} {...props} />
      )
        //   :
        //   <SendGiftCard walletInfo={walletInfo} {...props} />
      }
    </>
  );
}
