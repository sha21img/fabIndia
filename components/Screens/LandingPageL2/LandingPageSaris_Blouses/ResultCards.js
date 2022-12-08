import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../../Common/Card';
import Card1 from '../../../Common/Card1';
import {getComponentData, postData} from '../../../Common/Helper';
import axios from 'axios';
import SortBox from './SortBox';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultCards(props) {
  const [page, setPage] = useState(0);
  const [dataMain, setdataMain] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const {code, sortValue, openSort} = props;
  console.log(
    'code+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    code,
    sortValue,
  );
  const {data = []} = props;
  const getProductData = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
    );
    // fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}`);
    setdataMain(response.data);
    setFilterProducts(response.data.products);
    console.log('response.data.products', response.data);
    // console.log(
    //   'response.data.products',
    //   response.data.products[0].variantOptions[0].variantOptionQualifiers,
    // );

    if (filterProducts.length) {
      setFilterProducts([...filterProducts, ...response.data.products]);
    } else {
      setFilterProducts(response.data.products);
    }
  };
  const getSortProductData = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
    );
    setdataMain(response.data);
    setFilterProducts(response.data.products);
  };
  useEffect(() => {
    !!sortValue && getSortProductData();
  }, [sortValue]);
  useEffect(() => {
    getProductData();
    // https://apisap.fabindia.com/occ/v2/fabindiab2c/
    // products/search?query=:relevance:allCategories:new-women-accessories&pageSize=10&lang=en&curr=INR&currentPage
  }, [page]);
  const endReach = () => {
    if (dataMain?.pagination?.totalPages > page) {
      setPage(page + 1);

      // getProductData();
    }
  };
  const addWishlist = async data => {
    const value = await AsyncStorage.getItem('cartID');
    console.log("valuevaluevaluevaluevaluevaluevaluevaluevaluevalue",value)
    // console.log('addWishlist', data.code);
    // const response = await axios.post(
    //   // 'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR',
    //   `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/anonymous/carts/${data.code}/entries?lang=en&curr=INR`,
    // );
    // console.log('addwishlist data response', response.data);
    // https://apisap.fabindia.com/occ/v2/
    // fabindiab2c/users/anonymous/carts/378a862e-301d-4
    // 1ae-b2b2-015610c56c01/entries?lang=en&curr=INR
    const body = {
      quantity: 1,
      product: {
        code: data.code,
      },
    };
    const response = await postData(
      `fabindiab2c/users/current/carts/${value}/entries?lang=en&curr=INR`,
      body,
    );
    console.log('responseppppppppppp', response);
  };
  const getCardData = item => {
    return (
      <Card1
        handleClick={addWishlist}
        customViewStyle={{marginVertical: 7}}
        {...props}
        item={item.item}
      />
    );
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <SortBox
            openSort={openSort}
            dataMain={filterProducts}
            //  openFilter={openFilter}
          />
        )}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          flexGrow: 1,
          backgroundColor: '#FFFFFF',
        }}
        numColumns={2}
        data={filterProducts}
        onEndReached={endReach}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={getCardData}
      />
    </>
  );
}
