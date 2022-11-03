import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CollectionCard from '../../../../../Common/CollectionCard';
import {image} from '../../../../../../assets/images';
import {Colors} from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
import {Styles} from './style';
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
const Collections = ({customStyle}) => {
  return (
    <View style={customStyle}>
      <Text style={Styles.collectiontxt}>Collections</Text>
      <ScrollView horizontal contentContainerStyle={Styles.container}>
        {collectionData.map(item => (
          <CollectionCard item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Collections;
