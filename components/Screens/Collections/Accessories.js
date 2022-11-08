import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import NameCard from '../../Common/NameCard';
const width = Dimensions.get('window').width;

const data = [
  {banner: image.homeCard, title: 'Jewellery'},
  {banner: image.homeCard, title: 'Bags'},
  {banner: image.homeCard, title: 'Footwear'},
  {banner: image.homeCard, title: 'Face Masks'},
];
export default function Accessories() {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          paddingHorizontal: 15,
        }}>
        Accessories
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 28,
          paddingHorizontal: 15,
          paddingTop: 5,
          paddingBottom: 10,
        }}>
        Presenting handcrafted jewellery & other accessories from the Ajrakh
        collection.
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(item => {
          return (
            <>
              <NameCard width={width / 2} height={248} item={item} />
            </>
          );
        })}
      </View>
    </>
  );
}
