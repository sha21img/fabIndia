import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import KidsNameCard from '../../Common/KidsNameCard';

const data = [
  {banner: image.BeautyCarousel, title: 'Girls Apparel'},
  {banner: image.BeautyCarousel, title: 'Boys Apparel'},
  {banner: image.BeautyCarousel, title: 'Infant’s Apparel'},
];
export default function KidsCards({customStyle}) {
  return (
    <>
      <View style={[customStyle]}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 30,
            lineHeight: 40,
            paddingHorizontal: 15,
          }}>
          Kids
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 20,
            lineHeight: 28,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          Cutest Ajrakh prints for your li’l sunshine!
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexWrap: 'wrap',
          }}>
          {data.map(item => {
            return (
              <>
                <KidsNameCard width={307} height={175} item={item} />
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
