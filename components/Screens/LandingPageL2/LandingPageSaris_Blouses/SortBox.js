import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';

export default function SortBox({
  openSort = null,
  dataMain = 0,
  productCount = 0,
}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
        <Text
          style={{
            fontFamily: Fonts.Assistant600,
            fontSize: 14,
            color: '#979797',
          }}>
          {productCount}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant600,
            fontSize: 14,
            color: '#979797',
          }}>
          {' '}
          products
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            borderLeftWidth: 1,
            marginVertical: 10,
            borderLeftColor: '#828282',
          }}
        />
        <TouchableOpacity onPress={() => openSort()}>
          <Text
            style={{
              padding: 10,
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              lineHeight: 16,
              color: Colors.primarycolor,
            }}>
            Sort
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderLeftWidth: 1,
            marginVertical: 10,
            borderLeftColor: '#828282',
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              padding: 10,
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              color: Colors.primarycolor,
              lineHeight: 16,
            }}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
