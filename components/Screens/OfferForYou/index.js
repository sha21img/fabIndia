import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function OfferForYou({
  dataWomen,
  dataMen,
  dataKids,
  dataHome,
  isAdmin2,
}) {
  const flatlistRef = useRef()
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Women');
  const [selectedCards, setSelectedCards] = useState(dataWomen);

  useEffect(() => {
    // TO show Very first time
    setSelectedCards(dataWomen)
  }, [dataWomen]);

  const offerTabs = [{
    title: Array.isArray(dataWomen) && dataWomen[0]?.categoryName,
    data: dataWomen
  }, {
    title: Array.isArray(dataMen) && dataMen[0]?.categoryName,
    data: dataMen
  }, {
    title: Array.isArray(dataKids) && dataKids[0]?.categoryName,
    data: dataKids
  }, {
    title: Array.isArray(dataHome) && dataHome[0]?.categoryName,
    data: dataHome
  }]

  const Card = item => {
    return (
      <View key={item?.item?._id}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => {
            const newCode = item.item.landingPage;
            navigation.navigate('LandingPageSaris_Blouses', {
              code: newCode,
              title: item.item.title,
              isAdmin2: isAdmin2,
            });
          }}>
          <FastImage
            style={{ height: 128, width: 192 }}
            source={{
              uri: item?.item?.image?.split('?')[0],
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <Text style={{ fontSize: 20, color: Colors.textcolor, marginLeft: 16, paddingTop: 20, fontFamily: Fonts.PlayfairDisplay600Italic }}>Offers for you</Text>

      <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
        {offerTabs.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setSelectedTab(item.title)
                setSelectedCards(item.data)
                // Scroll to first index
                flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });
              }}
              style={{ paddingVertical: 5, marginRight: 16, borderBottomWidth: 2, borderBottomColor: selectedTab == item.title ? Colors.primarycolor : 'transparent' }}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 16 }}>
        <FlatList
          ref={flatlistRef}
          horizontal
          data={selectedCards}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.item?._id}
          renderItem={Card}
        />
      </View>
    </>
  );
}
