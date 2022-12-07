import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
import RadioButtonRN from 'radio-buttons-react-native';
import {Styles} from './styles';
import ExchangeCard from '../../../../../Common/EchangeCard';
import {ExchangeProduct} from '../../../../../../constant';
import CommonTopTab from '../../../../../Common/CommonTopTab';
import Card from '../../../../../Common/Card';
const data = [
  {label: 'Size did not fit me', index: 0},
  {label: 'I want a different colour', index: 1},
  {label: 'I want a different product', index: 2},
];
const CardComp = () => {
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}>
        <Card />
        <Card />
      </ScrollView>
    </>
  );
};
export default function ExchangeItem({exchangeStatus, setExchangeStatus}) {
  const screenObj = {
    All: () => CardComp(),
    Cotton: () => CardComp(),
    Silk: () => CardComp(),
    Linen: () => CardComp(),
    'Cotton Silk': () => CardComp(),
    Viscose: () => CardComp(),
  };
  const dataMap = ExchangeProduct.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  return (
    <>
      <View style={Styles.reasonsContainer}>
        <Text style={Styles.boldTitle}>Reason for returning</Text>
        <View>
          {/* //---radio button----/// */}
          <RadioButtonRN
            animationTypes={['zoomIn']}
            circleSize={17}
            box={false}
            data={data}
            activeColor={Colors.primarycolor}
            selectedBtn={e => {
              console.log('e', e), setExchangeStatus(e.index);
            }}
            style={{marginVertical: 9}}
          />
        </View>
      </View>
      {exchangeStatus == 1 ? (
        <View style={{paddingVertical: 20, paddingHorizontal: 15}}>
          <Text style={Styles.replacecolortxt}>Select replacement colour</Text>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={Styles.originalcolortxt}>Original colour</Text>
            <ExchangeCard />
          </View>
        </View>
      ) : null}

      {exchangeStatus == 2 ? (
        <View style={{paddingVertical: 20}}>
          <View
            style={{
              paddingHorizontal: 15,
            }}>
            <Text style={Styles.replacecolortxt}>
              Select replacement colour
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              paddingHorizontal: 15,
            }}>
            <Text style={Styles.saritetx}>More in Saris</Text>
          </View>

          <CommonTopTab data={dataMap} />
        </View>
      ) : null}
    </>
  );
}
