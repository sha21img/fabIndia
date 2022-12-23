import {View, Text} from 'react-native';
import React from 'react';
import SingleProductCard from '../../../Common/SingleProductCard';

export default function ResultCards({data = []}) {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        {data.map(item => {
          return (
            <SingleProductCard
              item={item}
              customViewStyle={{marginVertical: 10}}
              Noti={false}
            />
          );
        })}
      </View>
    </>
  );
}
