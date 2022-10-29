import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import Card from '../../Common/Card';
import TrendingNow from './TrendingNow';
import SearchResult from './SearchResult';
import {Styles} from './styles';
import Tags from './Tags';
import SingleProduct from './SingleProduct';
const data = [
  {name: 'Cotton sari'},
  {name: 'Bedsheets'},
  {name: 'Oxidised jewellery'},
  {name: 'Dining table'},
];

export default function Search() {
  return (
    <>
      {/* <SingleProduct /> */}
      <View style={Styles.headercontainer}>
        <View style={Styles.leftarrowbox}>
          <SimpleLineIcons
            name="arrow-left"
            color={Colors.primarycolor}
            size={20}
          />
        </View>
        <View style={Styles.headerinputbox}>
          <TextInput
            style={Styles.txtinput}
            placeholder="Search for products"
            placeholderTextColor={'#BDBDBD'}
          />
          <TouchableOpacity style={Styles.righticonbox}>
            <AntDesign name="search1" color={Colors.primarycolor} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollcontainer}>
        <View style={Styles.recentsearchbox}>
          <Text style={Styles.recentsearchtxt}>Recent searches</Text>
          <Text style={Styles.cleartxt}>clear</Text>
        </View>
        {data.map((item, index) => {
          return (
            <View
              key={Math.random() * 1000}
              style={[
                Styles.searchlistbox,
                {
                  borderBottomWidth: data.length - 1 ? 0.3 : 0,
                },
              ]}>
              <Text style={Styles.searchlisttxt}>{item.name}</Text>
              <Entypo name="cross" color="#979797" size={15} />
            </View>
          );
        })}
        <Text style={Styles.discovertxt}>Discover more</Text>
        <View style={Styles.chipcontainer}>
          <Tags />
        </View>
        <TrendingNow />
      </ScrollView>
    </>
  );
}
