import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import {WomenTabdata} from '../../../../constant';
import {getComponentData} from '../../../Common/Helper';

export default function Tabs({data = [], position}) {
  const [active, setActive] = React.useState('Bestsellers');

  const getTabCount = async () => {
    // const filterArray = data.filter(item => {
    //   return item.position == position;
    // });
    // console.log('filterArray', filterArray);
    // const filterSlotId = filterArray[0].components.component[0].uid;
    // console.log('commontabuid', filterSlotId);
    // const response = await getComponentData(
    //   `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    // );
    // const bannerId = response.data.component[0].banners;
    // console.log('commontabbannerId', bannerId);
  };
  useEffect(() => {
    getTabCount();
  });
  const CardCompo = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <Card
            offer="20"
            originalprice="1,000"
            customViewStyle={{marginRight: 10}}
          />
          <Card customViewStyle={{marginRight: 10}} />
        </ScrollView>
      </>
    );
  };
  const handleClick = data => {
    setActive(data);
  };
  const screenObj = {
    Saris: CardCompo,
    Tunics: CardCompo,
    Kurtas: CardCompo,
    Dresses: CardCompo,
    'Tops Shirts': CardCompo,
    Pants: CardCompo,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 10,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={active}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      <View style={{marginLeft: 15, height: 470}}>
        <CommonTopTab data={dataMap} />
      </View>
    </>
  );
}
