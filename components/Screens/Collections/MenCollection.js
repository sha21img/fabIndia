import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import NameCard from '../../Common/NameCard';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

const data = [
  {banner: image.manCarousel, title: 'Kurtas'},
  {banner: '', title: 'Shawls'},
  {banner: '', title: 'Nehru Jackets'},
  {banner: image.manCarousel, title: 'Shirts'},
  {banner: image.manCarousel, title: 'Kurtas'},
  {banner: '', title: 'Shawls'},
];
export default function MenCollection() {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 30,
          lineHeight: 40,
          paddingHorizontal: 15,
        }}>
        Men
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 20,
          lineHeight: 28,
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        Discover an exquisite array of Kurtas, handcrafted Nehru Jackets & more{' '}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          height: 520,
          flexDirection: 'column',
          paddingHorizontal: 15,
          flexWrap: 'wrap',
        }}>
        {data.map(item => {
          return (
            <>
              <NameCard width={180} height={250} item={item} />
            </>
          );
        })}
      </ScrollView>
    </>
  );
}
