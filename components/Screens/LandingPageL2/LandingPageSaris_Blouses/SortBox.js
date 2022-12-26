import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function SortBox({
  openSort = null,
  dataMain = 0,
  productCount = 0,
  totalCount = 0,
  openFilter = null,
}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        elevation: 6
      }}>
      {/* <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
        <Text
          style={{
            fontFamily: Fonts.Assistant600,
            fontSize: 14,
            color: '#979797',
          }}>
          {totalCount}
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
      </View> */}
      {/* <View
        style={{
          borderLeftWidth: 1,
          marginVertical: 10,
          borderLeftColor: '#828282',
        }}
      /> */}
      <TouchableOpacity
        onPress={() => openSort()}
        style={{
          width: '50%',
          borderRightWidth: 1,
          borderRightColor: Colors.primarycolor,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Fontisto name="arrow-swap" color={Colors.primarycolor} size={10} />

        <Text
          style={{
            fontFamily: Fonts.Assistant500,
            fontSize: 16,
            color: Colors.primarycolor,
            textAlign: 'center',
            paddingLeft: 10,
          }}>
          SORT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => openFilter()}>
        <FontAwesome name="filter" color={Colors.primarycolor} size={15} />
        <Text
          style={{
            fontFamily: Fonts.Assistant500,
            fontSize: 16,
            color: Colors.primarycolor,
            textAlign: 'center',
            paddingLeft: 10,
          }}>
          FILTER
        </Text>
      </TouchableOpacity>
    </View>
  );
}
