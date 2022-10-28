import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import SingleProductCard from '../../Common/SingleProductCard';
import {Styles} from './styles';

const SingleProduct = () => {
  return (
    <>
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: '#F6F6F6',
          paddingHorizontal: 15,
        }}>
        <Text>1 product</Text>
      </View>
      <ScrollView
        contentContainerStyle={[Styles.scrollcontainer, {paddingBottom: 10}]}>
        {[0].map(item => (
          <SingleProductCard
            customViewStyle={{marginVertical: 10}}
            item={item}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default SingleProduct;
