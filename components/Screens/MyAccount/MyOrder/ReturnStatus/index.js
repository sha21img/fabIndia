import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import OrderProductLongCard from '../../../../Common/OrderProductLongCard';
import OrderProductCard from '../../../../Common/OrderProductCard';
import ReturnItem from '../ReturnItem';
import CommonButton from '../../../../Common/CommonButton';
import ExchangeItem from './ExchangeItem';
import {Styles} from './styles';

export default function ReturnStatus(props) {
  const screenName = props.route.params.screen;
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [exchangeStatus, setExchangeStatus] = useState(null);

  console.log('screenName', screenName);
  const handleClick = () => {
    console.log('handleClick');
    setModalShow(!modalShow);
  };
  return (
    <>
      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <OrderProductCard
          image="https://www.bringitonline.in/uploads/2/2/4/5/22456530/saree-photographers-in-delhi-bringitonline-2_orig.jpeg"
          title="Cotton Silk Block Printed Sari Product Name"
          size="M"
          quantity="1"
          price="3,500"
        />

        <View style={Styles.policyContainer}>
          <Text> ↩ Eligible for return till 15 Jun </Text>
          <Text style={Styles.viewPolicy}>View policy</Text>
        </View>

        {screenName == 'Return' ? (
          <ReturnItem
            setSelected={setSelected}
            selected={selected}
            modalShow={modalShow}
            setModalShow={setModalShow}
          />
        ) : (
          <ExchangeItem
            exchangeStatus={exchangeStatus}
            setExchangeStatus={setExchangeStatus}
          />
        )}
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 7,
          backgroundColor: '#EDEDED',
          elevation: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.Assistant600,
            fontSize: 16,
          }}>
          Refund amount:
        </Text>
        <Text
          style={[
            {
              fontFamily: Fonts.RupeeForadian,
              fontSize: 14,
              color: Colors.textcolor,
            },
            {color: Colors.primarycolor, marginLeft: 5},
          ]}>
          ₹ 3,500
        </Text>

        {/* ///---button---/// */}
      </View>
      {selected !== 4 && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#FDFDFD',
            elevation: 5,
          }}>
          <CommonButton
            handleClick={handleClick}
            backgroundColor="#BDBDBD"
            txt={` Confirm ${screenName}`}
            customViewStyle={{
              backgroundColor: '#BDBDBD',
            }}
          />
        </View>
      )}
      {selected == 4 && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#FDFDFD',
            flexDirection: 'row',
            elevation: 5,
          }}>
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Try exchange"
            btntxtColor={Colors.primarycolor}
            customViewStyle={{
              width: '48%',
              marginRight: 10,
              borderColor: Colors.primarycolor,
              borderWidth: 1,
            }}
          />
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Confirm return"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
              width: '48%',
            }}
          />
        </View>
      )}
    </>
  );
}
