import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {image} from '../../../../../assets/images';
import {Styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL2, logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';
function MygiftCard(props) {
  const dispatch = useDispatch();
  const {walletInfo} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [walletHistory, setWalletHistory] = useState([]);

  const getWalletHistory = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(
        `${BaseURL2}/users/current/wallethistory?lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        if (response && response.status === 200) {
          setWalletHistory(response.data.walletTransactions);
        }
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  useEffect(() => {
    getWalletHistory();
  }, []);

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Image style={Styles.stretch} source={image.fabgiftcard} />
      <View
        style={[
          Styles.txtContainer,
          {borderBottomWidth: 1, borderBottomColor: '#EDEDED', marginTop: 13},
        ]}>
        <Text style={Styles.totalBalanceTxt}>Total Balance:</Text>
        <View>
          <Text style={Styles.amountTxt}>
            <Text style={Styles.priceicon}>₹ </Text>
            {walletInfo?.totalBalance}
          </Text>
        </View>
      </View>

      <View style={Styles.txtContainer}>
        <Text style={Styles.cardTxt}>Card Number:</Text>
        <View>
          <Text style={Styles.amountTxt}>{walletInfo?.walletNumber}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={Styles.viewHistory}
        onPress={() => setModalVisible(true)}>
        <Text style={Styles.viewhistorytext}>View History</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.modalShadow}>
          <View style={Styles.modalMainView}>
            <View style={Styles.headingView}>
              <Text style={Styles.historytxt}>History</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close-circle-outline" size={25} color="gray" />
              </Pressable>
            </View>

            <View style={Styles.transactionView}>
              <Text style={Styles.modalTextTwo}>Transaction</Text>
              <Text style={Styles.modalTextTwo}>Credit</Text>
              <Text style={Styles.modalTextTwo}>Debit</Text>
              <Text style={Styles.modalTextTwo}>Status</Text>
            </View>

            {walletHistory?.map(item => {
              return (
                <View style={Styles.walletCreateViewOne}>
                  <View style={Styles.boxDimension}>
                    <Text style={Styles.wallettext}>
                      {item.transactionType}
                    </Text>
                    <View style={{marginTop: 5}}>
                      <Text style={Styles.modalTextThree}>
                        {item.merchantName}
                      </Text>
                      <Text style={Styles.modalTextThree}>
                        {item.transactionPostDate}
                      </Text>
                    </View>
                  </View>
                  <Text style={Styles.wallettext}>+ ₹ {item.amount}</Text>
                  <Text style={Styles.wallettext}>-</Text>
                  <Text style={Styles.wallettext}>
                    {item.transactionStatus}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default MygiftCard;
