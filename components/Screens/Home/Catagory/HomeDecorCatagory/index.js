import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import TopGallary from './TopGallery';
import InteriorCatagory from '../../../../Common/InteriorCatagory';
import Fonts from '../../../../../assets/fonts';
import HomeMade from './HomeMade';
const HomeDecorCatagory = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
        flexGrow: 1,
      }}>
      <TopGallary />
      <View style={{marginVertical: 40}}>
        <InteriorCatagory />
      </View>
      <View>
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay600,
              fontSize: 30,
              color: Colors.textcolor,
            }}>
            Handmade with love
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 18,
              color: Colors.textcolor,
            }}>
            Authentic, handcrafted and sustainable - right from the source to
            your home!
          </Text>
        </View>
        <HomeMade />
      </View>
    </ScrollView>
  );
};

export default HomeDecorCatagory;
