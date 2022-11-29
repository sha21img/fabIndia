import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import Card3 from '../Card3';
import {Styles} from './style';
export default function WishListCard() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <Text style={Styles.txt1}>
            It's never too late to add to your cart!
          </Text>
          <Text style={Styles.txt2}>6 products</Text>
        </View>

        <View style={Styles.mainView}>
          {[0, 0, 0, 0, 0, 0].map(item => {
            return <Card3 customViewStyle={{marginBottom: 15}} />;
          })}
        </View>
      </ScrollView>
    </>
  );
}
