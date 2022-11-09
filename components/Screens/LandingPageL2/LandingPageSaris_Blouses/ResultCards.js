import {View, Text} from 'react-native';
import React from 'react';
import Card from '../../../Common/Card';
import Card1 from '../../../Common/Card1';

export default function ResultCards({data = []}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        {data.map(item => {
          return <Card1 customViewStyle={{marginVertical: 7}} />;
        })}
      </View>
    </>
  );
}
