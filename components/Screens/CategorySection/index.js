import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Accordian from '../../Common/Accordian';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getComponentData} from '../../Common/Helper';

export default function CategorySection(props) {
  const [listData, setListData] = useState([]);
  const shownData = data => {
    let filtered = data.filter(item => {
      return (
        item.title == 'New Arrivals' ||
        item.title == 'Women' ||
        item.title == 'Men' ||
        item.title == 'Kids' ||
        item.title == 'Home & Living' ||
        item.title == 'Furniture' ||
        item.title == 'Personal Care' ||
        item.title == 'Food'
      );
    });
    setListData(filtered);
  };
  const categoryList = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('getToken-=as-fd=-asd=f-=sdaf-', getToken);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=FabHamBurgerComponent&lang=en&curr=INR`,
    );
    shownData(response.component[0].navigationNode.children);
  };
  useEffect(() => {
    categoryList();
  }, []);
  return (
    <FlatList
      // columnWrapperStyle={{
      //   backgroundColor: 'red',
      //   // justifyContent: 'space-around',
      //   paddingHorizontal: 15,
      // }}
      data={listData}
      keyExtractor={item => console.log('this is for key')}
      renderItem={({item, index}) => <Accordian data={item} />}
    />
  );
}
