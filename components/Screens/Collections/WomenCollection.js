import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import NameCard from '../../Common/NameCard';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

const data = [
  {banner: '', title: 'Kurta'},
  {banner: image.ArtistImg1, title: 'Dupattas'},
  {banner: image.ArtistImg1, title: 'Saris'},
  {banner: '', title: 'Lehengas'},
  {banner: '', title: 'Kurtas'},
  {banner: image.ArtistImg1, title: 'KurtDupattasas'},
];
export default function WomenCollection({customStyle}) {
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
          Women
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 20,
            lineHeight: 28,
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          A thoughtfully curated Ajrakh collection of women’s apparel
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
      </View>
    </>
  );
}
