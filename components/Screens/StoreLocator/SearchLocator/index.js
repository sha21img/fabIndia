import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../../../assets/images'
import CommonTopTab from '../../../Common/CommonTopTab';
import {StoreLocateTab} from '../../../../constant';
import InputText from '../../../Common/InputText';
import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './style';
import Fonts from '../../../../assets/fonts';
import StoreDetails from '../../../Common/StoreDetails';
const width = Dimensions.get('window').width;
export default function SearchLocator() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          paddingVertical: 20,
        }}>
        <Image
          source={image.map}
          style={{height: 197, width: width / 1.07}}
          resizeMode="stretch"
        />
      </View>
      <View style={{paddingHorizontal: 15,}}>
        <Text
          style={{
            color: '#4A4A4A',
            paddingBottom:14,
            fontSize: 16,
            fontFamily: Fonts.Assistant600,
          }}>
          There are 10 stores near you
        </Text>
        <StoreDetails/>
      </View>

      
    </ScrollView>
  );
}
