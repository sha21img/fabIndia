import {View, Text} from 'react-native';
import React from 'react';
import FullPointerCard from '../../../Common/FullPointerCard';

export default function ResultCards({data = []}) {
  return (
    <>
      <View style={{
        paddingHorizontal:15
      }}>
        {data.map(item => {
          return (
            <FullPointerCard
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
