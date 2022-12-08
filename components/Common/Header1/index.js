import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Styles} from './style';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Header1({
  customViewStyle = {},
  headtext = '',
  count = '',
}) {
  const [text, setText] = React.useState('');
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();
  const getProductSearchData = async () => {
    // const response = await axios.get(
    //   `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
    // );
  };
  useEffect(() => {
    getProductSearchData();
  }, []);
  return (
    <>
      <View style={[Styles.container, customViewStyle]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{paddingHorizontal: 5}}
            onPress={() => navigation.goBack()}>
            <SimpleLineIcons
              name="arrow-left"
              color={Colors.primarycolor}
              size={20}
            />
          </TouchableOpacity>
          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Fonts.PlayfairDisplay400,
                color: Colors.primarycolor,
              }}>
              {headtext}
            </Text>
            {!!count && (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: Fonts.PlayfairDisplay400,
                  color: Colors.primarycolor,
                }}>
                {count} items
              </Text>
            )}
          </View>
        </View>
        <View style={Styles.detailContainer}>
          <TouchableOpacity
            style={Styles.locationContainer}
            onPress={() => {
              setShow(!show);
            }}>
            <EvilIcons name="search" color={Colors.primarycolor} size={30} />

            {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.currencyContainer}>
            <EvilIcons name="heart" color={Colors.primarycolor} size={30} />

            {/* <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.cartContainer}>
            <EvilIcons name="cart" size={30} color={Colors.primarycolor} />
          </TouchableOpacity>
        </View>
      </View>
      {show ? (
        <>
          <View
            style={{
              position: 'absolute',
              top: 16,
              left: '10%',
              width: '72%',
            }}>
            <TextInput
              placeholder="Search here..."
              onChangeText={text => setText(text)}
              value={text}
              style={{
                backgroundColor: 'white',
                paddingVertical: 6,
                borderRadius: 50,
                paddingHorizontal: 25,
                elevation: 5,
              }}
            />
            <View
              style={{
                position: 'absolute',
                right: 5,
                top: 5,
              }}>
              <FontAwesome
                name="close"
                color={Colors.primarycolor}
                size={25}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
          </View>
        </>
      ) : null}
    </>
  );
}
