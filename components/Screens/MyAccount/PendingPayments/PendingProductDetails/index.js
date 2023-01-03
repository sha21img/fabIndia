import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';
import {image} from '../../../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import {useNavigation} from '@react-navigation/native';
export default function PendingProductDetails() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={Styles.mainContainer}>
        <Text>PendingProductDetails</Text>
      </ScrollView>
    </>
  );
}
