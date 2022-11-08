import {View, Text} from 'react-native';
import React from 'react';
import Fonts from '../../../../../assets/fonts';
import LifeStyle from '../../../../Common/LifeStyle';
import {image} from '../../../../../assets/images';
const LifeStyleData = [
  {image: image.womenPhoto1, name: 'Work from Home'},
  {image: image.womenPhoto2, name: 'Summer afternoons'},
  {image: image.womenPhoto3, name: 'Summer afternoons'},
  {image: image.womenPhoto4, name: 'Work from Home'},
];
const GetLifeStyleTitle = () => {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
          marginBottom: 5,
        }}>
        Lifestyle 360
      </Text>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: '#4A4A4A',
            lineHeight: 23,
            fontFamily: Fonts.Assistant400,
            marginHorizontal: 20,
          }}>
          Combos that’ll keep you feeling fab!
        </Text>
      </View>
    </>
  );
};

const LifeStyleCard = () => {
  return (
    <LifeStyle
      data={LifeStyleData}
      title={GetLifeStyleTitle}
      customViewStyle={{marginTop: 10}}
    />
  );
};

export default LifeStyleCard;
