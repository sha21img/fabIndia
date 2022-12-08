import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputText from '../../../Common/InputText';
import debounce from 'lodash.debounce';

import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
export default function HomeHeader(props) {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const {homeheader = false, searchVisible = true} = props;
  // const getProductSearchData = async () => {
  //   const response = await axios.get(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=${text}&pageSize=5&lang=en&curr=INR`,
  //   );
  //   console.log('response for search', response.data.products);
  //   setFilterProduct(response.data.products);
  // };
  // useEffect(() => {
  //   if (!!text && text.length > 3) {
  //     getProductSearchData();
  //   } else {
  //     setFilterProduct([]);
  //   }
  // }, [text]);
  // console.log('filterProductfilterProduct', filterProduct);
  return (
    <>
      <View style={Styles.container}>
        {homeheader ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
            }}>
            <SimpleLineIcons
              name="menu"
              color={Colors.primarycolor}
              size={20}
              onPress={() => props.navigation.openDrawer()}
            />
            <Image source={image.color_logo} style={Styles.imagestyle} />
          </View>
        ) : (
          <TouchableOpacity
            style={{paddingHorizontal: 5}}
            onPress={() => props.navigation.goBack()}>
            <SimpleLineIcons
              name="arrow-left"
              color={Colors.primarycolor}
              size={20}
            />
          </TouchableOpacity>
        )}

        <View style={Styles.detailContainer}>
          {searchVisible ? (
            <TouchableOpacity
              style={Styles.locationContainer}
              onPress={() => {
                console.log('jiji'),
                  props.navigation.navigate('InitialSearch', {
                    screen: 'Search',
                  });
              }}>
              <EvilIcons
                name="search"
                color={Colors.primarycolor}
                size={30}
                // onPress={() => {
                //   setShow(!show);
                // }}
              />
            </TouchableOpacity>
          ) : (
            <Ionicons
              name="share-social"
              color={Colors.primarycolor}
              size={25}
            />
          )}
          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
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
      {/* {show ? (
        <>
          <View
            style={{
              position: 'absolute',
              left: '10%',
              width: '80%',
              zIndex: 999,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 5,
              paddingHorizontal: 20,
              borderRadius: 40,
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Search here..."
                onChangeText={text => setText(text)}
                value={debouncedText}
                style={{
                  width: '95%',
                }}
              />
              <FontAwesome
                name="close"
                color={Colors.primarycolor}
                size={25}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
            {filterProduct.length > 0 ? (
              filterProduct?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('ProductDetailed', {
                        productId: item.code,
                      })
                    }
                    style={{paddingBottom: 10, paddingHorizontal: 15}}>
                    <Text>{item.name}</Text>
                    <Text>{item.price.formattedValue}</Text>
                  </TouchableOpacity>
                );
              })
            ) : filterProduct.length ? (
              <Text>No Product Found</Text>
            ) : null}
          </View>
        </>
      ) : null} */}
    </>
  );
}
{
  /* <View style={Styles.container}>
<View style={Styles.logoBox}>
  <Image source={image.color_logo} style={Styles.logo} />
</View>
<View style={Styles.detailContainer}>
  <TouchableOpacity style={Styles.locationContainer}>
    <Ionicons name="location-sharp" color={'#792C27'} size={20} />
    <Text numberOfLines={1} style={Styles.locationText}>
      Powai, Mumbai
    </Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.currencyContainer}>
    <Text style={Styles.currencyIcon}>₹</Text>
    <Text style={Styles.currencyText}>INR</Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.cartContainer}>
    <AntDesign name="shoppingcart" size={24} color={'#792C27'} />
  </TouchableOpacity>
</View>
</View> */
}
