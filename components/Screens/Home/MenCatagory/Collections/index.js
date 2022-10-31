import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CollectionCard from '../../../../Common/CollectionCard';
import {image} from '../../../../../assets/images';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const collectionData = [
  {
    image: image.collectionPic,
    heading: 'Summer Collection',
    text: 'Be summer-ready with prints and easy, breezy silhouettes',
    color: '#AFA07A',
  },
  {
    image: image.collectionPic2,
    heading: 'Summer Collection',
    text: 'Be summer-ready with prints and easy, breezy silhouettes',
    color: '#464A62',
  },
];
const Collections = () => {
  return (
    <View style={{paddingVertical: 30}}>
      <Text
        style={{
          paddingHorizontal: 15,
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 20,
          color: Colors.textcolor,
          paddingBottom: 10,
        }}>
        Collections
      </Text>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}}>
        {collectionData.map(item => (
          <CollectionCard item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Collections;
