import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import Card from '../../Common/Card';
const data = [
  {name: 'Cotton sari'},
  {name: 'Bedsheets'},
  {name: 'Oxidised jewellery'},
  {name: 'Dining table'},
];
const data1 = [
  {name: 'Men’s Kurta'},
  {name: 'Shirts'},
  {name: 'Kidswear'},
  {name: 'Bed Linen'},
  {name: 'Cushion covers'},
  {name: 'Pillow'},
  {name: 'Chairs'},
  {name: 'Study table'},
  {name: 'Curtains'},
];
const data2 = [0, 1, 2];
export default function Search() {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F8F6F5',
          elevation: 5,
          marginBottom: 10,
        }}>
        <Ionicons name="chevron-back" color={Colors.primarycolor} size={35} />
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            borderRadius: 60,
            marginLeft: 15,
          }}>
          <TextInput
            style={{
              width: '70%',
              fontSize: 14,
              fontFamily: Fonts.AssistantRegular,
            }}
            placeholder="Search for products"
            placeholderTextColor={'#BDBDBD'}
          />
          <TouchableOpacity style={{width: '10%', alignItems: 'center'}}>
            <AntDesign name="search1" color={Colors.primarycolor} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          flexGrow: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              fontFamily: Fonts.AssistantRegular,
              color: '#4A4A4A',
            }}>
            Recent searches
          </Text>
          <Text
            style={{
              color: Colors.primarycolor,
              fontWeight: '600',
              fontSize: 14,
              fontFamily: Fonts.AssistantRegular,
            }}>
            clear
          </Text>
        </View>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 15,
                borderBottomWidth: data.length - 1 ? 0.3 : 0,
                borderBottomColor: '#EDEDED',
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  fontFamily: Fonts.AssistantRegular,
                  color: '#979797',
                }}>
                {item.name}
              </Text>
              <Entypo name="cross" color="#979797" size={15} />
            </View>
          );
        })}
        <Text
          style={{
            paddingVertical: 15,
            fontSize: 16,
            fontWeight: '400',
            fontFamily: Fonts.AssistantRegular,
            color: '#4A4A4A',
          }}>
          Discover more
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data1.map((item, index) => {
            return (
              <>
                <View
                  key={index}
                  style={{
                    backgroundColor: '#F3ECE8',
                    paddingVertical: 3,
                    paddingHorizontal: 12,
                    borderRadius: 30,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{fontSize: 18, fontweight: '300', color: '#4A4A4A'}}>
                    {item.name}
                  </Text>
                </View>
              </>
            );
          })}
        </View>
        <Text
          style={{
            paddingVertical: 20,
            fontWeight: '400',
            fontSize: 16,
            color: '#4A4A4A',
          }}>
          Trending now
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          <Card data2={data2} />
        </ScrollView>
      </ScrollView>
    </>
  );
}
