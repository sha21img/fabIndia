import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Card from '../Card';
import {getComponentData} from '../Helper';

export default function ShowData({item}) {
  // console.log('show Data Component', item.productCodes);

  React.useEffect(() => {
    getProductListData(item.productCodes);
  });
  const getProductListData = async id => {
    // console.log('id', id);
    const splitTabId = id?.split(' ').join(',');
    // console.log('splitTabId', splitTabId);

    const response = await getComponentData(
      // `fabindiab2c/products/${splitTabId}`,
      `fabindiab2c/products/10725164`,
    );
    // console.log('responseresponseresponse', response);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 10,
        backgroundColor: Colors.backgroundColor,
        flexGrow: 1,
      }}>
      <Card
        offer="20"
        originalprice="1,000"
        customViewStyle={{marginRight: 10}}
      />
      <Card customViewStyle={{marginRight: 10}} />
    </ScrollView>
  );
}
