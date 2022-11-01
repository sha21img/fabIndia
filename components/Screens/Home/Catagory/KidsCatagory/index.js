import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import TopGallary from './TopGallary';
import NewHighlights from '../../../../Common/NewHighlights';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import {hasSpaces} from '../../../../../constant';
const width = Dimensions.get('window').width;

const WomenHighlightData = [
  {image: image.womenCard, title: 'Saris'},
  {image: image.womenCard1, title: 'Tunics'},
  {image: image.womenCard1, title: 'Tops'},
];
const KidsCatagory = () => {
  const getTitle = () => {
    return (
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces('asdfgf') ? {width: width / 3} : {width: null},
        ]}>
        <Text
          style={{
            fontSize: 14,
            color: '#4A4A4A',
            fontFamily: Fonts.Assistant300,
          }}></Text>
        <Text
          style={{
            color: '#4A4A4A',
            fontSize: 30,
            fontFamily: 'Indie Flower',
          }}>
          Infants
        </Text>
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        paddingBottom: 20,
        flexGrow: 1,
      }}>
      <TopGallary />
      <NewHighlights
        title={getTitle()}
        data={WomenHighlightData}
        customStyle={{marginTop: 15}}
      />
    </ScrollView>
  );
};

export default KidsCatagory;
