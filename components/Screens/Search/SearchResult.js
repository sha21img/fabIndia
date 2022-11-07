import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Card from '../../Common/Card';
import Card1 from '../../Common/Card1';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {Styles} from './styles';

export default function SearchResult() {
  return (
    <>
      <View style={Styles.headingbox}>
        <View style={{width: '70%'}}>
          <Text style={Styles.productcounttxt}>1000 products</Text>
        </View>
        <View style={Styles.rightheaderbox}>
          <Text style={Styles.rightheadertxt}>Sort</Text>
          <View style={{borderWidth: 0.3, borderColor: '#828282'}}></View>
          <Text style={Styles.rightheadertxt}>Filter</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={Styles.cardcontainer}>
        {[0, 1, 3, 4, 5, 6].map(item => (
          <Card1
            item={item}
            customViewStyle={{width: '48%', marginTop: 10}}
            key={Math.random(100)}
          />
        ))}
      </ScrollView>
    </>
  );
}
